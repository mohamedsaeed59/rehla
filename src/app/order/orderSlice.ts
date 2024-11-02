import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

interface OrderState {
    loading: boolean;
    error: string | null;
    success: boolean;
}

const initialState: OrderState = {
    loading: false,
    error: null,
    success: false,
};

// Create an async thunk for the API call
export const addOrder = createAsyncThunk(
    'order/addOrder',
    async (orderData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${URL__API}/add-order`, orderData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetOrderState: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addOrder.pending, (state) => {
                state.loading = true;
            })
            .addCase(addOrder.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(addOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetOrderState } = orderSlice.actions;

export default orderSlice.reducer;
