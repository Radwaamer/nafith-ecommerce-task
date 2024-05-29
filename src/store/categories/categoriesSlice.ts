import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@customTypes/shared";
import actGetCategories from "./act/actGetCategories";

interface ICategoriesState {
    categoriesRecords: string[];
    loading: TLoading;
    error: null|string;
}

const initialState: ICategoriesState = {
    categoriesRecords:[],
    loading:"idle",
    error: null
}

export const categoriesSlice= createSlice({
    name: "categories",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.categoriesRecords = action.payload;
        });
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
        },
});

export default categoriesSlice.reducer;