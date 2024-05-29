import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";

interface ICartState {
    cartRecords: TProduct[];
    loading: TLoading;
    error: null|string;
}

const initialState: ICartState = {
    cartRecords:[],
    loading:"idle",
    error: null
}

export const cartSlice= createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state,action)=>{
            state.cartRecords.push(action.payload)
        },
        deleteItem: (state,action)=>{
            state.cartRecords=state.cartRecords.filter(item=>item.id!=action.payload.id);
        },
    },
});

export const {addItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;