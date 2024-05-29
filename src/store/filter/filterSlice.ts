import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@customTypes/shared";

interface IFilterState {
    filterRecords: string[];
    loading: TLoading;
    error: null|string;
}

const initialState: IFilterState = {
    filterRecords:[],
    loading:"idle",
    error: null
}

export const filterSlice= createSlice({
    name: "filter",
    initialState,
    reducers:{
        addFilter: (state,action)=>{
            state.filterRecords.push(action.payload);
        },
        deleteFilter: (state,action)=>{
            state.filterRecords=state.filterRecords.filter(filter=>filter!=action.payload);
        },
    }
});

export const {addFilter, deleteFilter} = filterSlice.actions;
export default filterSlice.reducer;