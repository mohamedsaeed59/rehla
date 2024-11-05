import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

const persistedOrders = localStorage.getItem('directOrders') ? JSON.parse(localStorage.getItem('directOrders')!) : [];

interface OrderState {
    loading: boolean;
    error: string | null;
    success: boolean;
    orders: any;
    directOrders: any;
    coupon_code: any;
    percentage: any;
}

const initialState: OrderState = {
    loading: false,
    error: null,
    success: false,
    orders: [],
    directOrders: persistedOrders,
    coupon_code: "",
    percentage: "",
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

// Create an async thunk for coupon
export const useCoupon = createAsyncThunk(
    'order/useCoupon',
    async (couponData: { coupon_code: string }, { rejectWithValue }) => {
      const accessToken = localStorage.getItem("access_token");
      try {
        const response = await axios.post(`${URL__API}/use-coupon`, couponData, {
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

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetOrderState: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
        setDirectOrder: (state, action) => {
            state.directOrders = action.payload;
            state.success = true;
            localStorage.setItem('directOrders', JSON.stringify(state.directOrders));
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

             // coupon
             builder
             .addCase(useCoupon.pending, (state) => {
                 state.loading = true;
             })
             .addCase(useCoupon.fulfilled, (state, action) => {
                 state.loading = false;
                 state.coupon_code = action.payload.data.coupon_id;
                 state.percentage = action.payload.data.percentage;
             })
             .addCase(useCoupon.rejected, (state, action) => {
                 state.loading = false;
                 state.error = action.payload as string;
             });
    },
});

export const { resetOrderState, setDirectOrder } = orderSlice.actions;

export default orderSlice.reducer;
