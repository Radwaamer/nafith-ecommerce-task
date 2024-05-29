import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GetAxios = <Type,>(name:string,path:string) => {
        return createAsyncThunk(
            name,
            async (param="", thunkAPI) => {
                const { rejectWithValue, signal } = thunkAPI;
                try {
                    const response = await axios.get<Type>(
                        `${path}${param}`, {signal}
                    );
                    return response.data;
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        return rejectWithValue(error.response?.data.message || error.message);
                    } else {
                        return rejectWithValue("An unexpected error");
                    }
                }
            }
        )
}

export default GetAxios