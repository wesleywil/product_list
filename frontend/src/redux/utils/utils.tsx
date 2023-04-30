import { createSlice } from "@reduxjs/toolkit";

export interface UtilState {
  hide_type_form: string;
}

const initialState: UtilState = {
  hide_type_form: "none" || "Furniture" || "Book" || "Dvd",
};

export const utilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    set_type_form: (state, { payload }) => {
      state.hide_type_form = payload;
    },
  },
});

export const { set_type_form } = utilSlice.actions;
export default utilSlice.reducer;
