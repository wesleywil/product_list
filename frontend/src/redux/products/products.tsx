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
  products_id: number[];
  status: string;
  error: any;
}

const initialState: ProductState = {
  products: [],
  products_id: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:8000");
    return res.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data: Product) => {
    const res = await axios.post("http://localhost:8000", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (ids: number[]) => {
    const res = await axios.delete("http://localhost:8000", {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        ids: ids,
      },
    });
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    select_products: (state, { payload }) => {
      return {
        ...state,
        products_id: [...state.products_id, payload],
      };
    },
    remove_products: (state, { payload }) => {
      return {
        ...state,
        products_id: state.products_id.filter(
          (productId) => productId !== payload
        ),
      };
    },
  },
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
      })
      .addCase(deleteProducts.pending, (state) => {
        state.status = "deleting";
      })
      .addCase(deleteProducts.fulfilled, (state) => {
        state.status = "product deleted successfully";
        state.products_id = [];
      })
      .addCase(deleteProducts.rejected, (state) => {
        state.status = "error in deleting product";
      });
  },
});

export const { select_products, remove_products } = productSlice.actions;
export default productSlice.reducer;
