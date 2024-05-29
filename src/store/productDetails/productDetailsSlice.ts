import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";
import actGetDetails from "./act/actGetDetails";

interface IDetailsState {
    detailsRecords: TProduct;
    loading: TLoading;
    error: null|string;
}

const initialState: IDetailsState = {
    detailsRecords:{id: 1, title: "", price: "", category: "", description: "", image: ""},
    loading:"idle",
    error: null
}

export const detailsSlice= createSlice({
    name: "details",
    initialState,
    reducers:{
        getItemInfo: (state,action)=>{
            state.detailsRecords= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetDetails.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetDetails.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.detailsRecords = action.payload;
        });
        builder.addCase(actGetDetails.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
        },
});

export const {getItemInfo} = detailsSlice.actions;
export default detailsSlice.reducer;