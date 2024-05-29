import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import { TProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/shared";
import actFilterProducts from "./act/actFilterProducts";
import actSortProducts from "./act/actSortProducts";

interface IProductsState {
    records: TProduct[];
    loading: TLoading;
    error: null|string;
    productsPerPage: number;
}

const initialState: IProductsState = {
    records:[],
    loading:"idle",
    error: null,
    productsPerPage: 8
}

export const productsSlice= createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

        // get all products
        builder.addCase(actGetProducts.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProducts.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetProducts.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // filter results
        builder.addCase(actFilterProducts.pending, (state) => {
            state.loading = "pending";
            state.error = null;
            state.records=[];
        });
        builder.addCase(actFilterProducts.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actFilterProducts.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // sort products
        builder.addCase(actSortProducts.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actSortProducts.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actSortProducts.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        },
});

export default productsSlice.reducer;