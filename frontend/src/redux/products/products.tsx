import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id?: string;
  sku: string;
  name: string;
  price: number;
  type?: string;
  specificAttribute?: string;
  userData?: {
    weight?: string;
    height?: string;
    width?: string;
    length?: string;
    size?: string;
  };
  attributeValue?: string;
  productType?: string;
}

export interface ProductState {
  products: Product[];
  status: string;
  error: any;
}

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:8000");
    console.log("Products from REDUX", res.data);
    return res.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data: Product) => {
    console.log("Create Product");
    const userData = {
      sku: data.sku,
      name: data.name,
      price: data.price,
      specificAttribute: data.specificAttribute,
      weight: data.userData?.weight,
      height: data.userData?.height,
      width: data.userData?.width,
      length: data.userData?.length,
      size: data.userData?.size,
      productType: data.productType,
    };
    console.log("DATA RECEIVED", data);
    const res = await axios.post("http://localhost:8000", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
      })
      .addCase(createProduct.pending, (state) => {
        state.status = "creating";
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.status = "product added successfully";
      })
      .addCase(createProduct.rejected, (state) => {
        state.status = "error in addding new product";
      });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
