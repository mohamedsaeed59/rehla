import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

interface OrderState {
    loading: boolean;
    error: string | null;
    success: boolean;
    orders: any;
}

const initialState: OrderState = {
    loading: false,
    error: null,
    success: false,
    orders: [],
};

// Create an async thunk for the API call
export const addOrder = createAsyncThunk(
    'order/addOrder',
    async (orderData: any, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
        try {
            const response = await axios.post(`${URL__API}/add-order`, orderData, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);

// Create an async thunk for fetching orders
export const fetchOrders = createAsyncThunk(
    'order/fetchOrders',
    async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
        try {
            const response = await axios.get(`${URL__API}/my-orders`,
                {
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                })
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error);
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
        // add Order
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

            // fetch Orders
            builder
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload.data;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetOrderState } = orderSlice.actions;

export default orderSlice.reducer;
