import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  weight?: string;
  height?: string;
  width?: string;
  length?: string;
  size?: string;
}

const initialState: FormState = {
  weight: "",
  height: "",
  width: "",
  length: "",
  size: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormValues: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    },
    cleanFormValues: (state) => {
      console.log("Test");
      state.weight = "";
      state.height = "";
      state.width = "";
      state.length = "";
      state.size = "";
    },
  },
});

export const { setFormValues, cleanFormValues } = formSlice.actions;
export default formSlice.reducer;
