import { createSlice } from "@reduxjs/toolkit";

export const inputWelcome = createSlice({
  name: "welcome",
  initialState: "",
  reducers: {
    welcome: (state, action) => {
      return action.payload;
    }
  }
});

export const { welcome } = inputWelcome.actions;
export default inputWelcome.reducer;
