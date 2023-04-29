import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  sku: string;
  name: string;
  price: number;
  type: string;
  specificAttribute: string;
  attributeValue: {
    weight?: string;
    height?: string;
    width?: string;
    length?: string;
    size?: string;
  };
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
    const res = await axios.get("localhost:8000/");
    return res.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data: Product) => {
    const res = await axios.post("localhost:8000/", data);
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
