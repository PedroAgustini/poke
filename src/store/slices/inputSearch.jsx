import { createSlice } from "@reduxjs/toolkit";

export const inputSearch = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        search: (state, action) => {

        }
    }
})

export const { search } = inputSearch.actions;
export default inputSearch.reducer;