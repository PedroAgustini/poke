import { createSlice } from "@reduxjs/toolkit";

export const changeInput = createSlice({
  name: "changeI",
  initialState: false,
  reducers: {
    change: (state, action) => {
      return !state;
    }
  }
});

export const { change } = changeInput.actions;
export default changeInput.reducer;
