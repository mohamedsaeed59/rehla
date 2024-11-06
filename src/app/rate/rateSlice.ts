import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

interface AppState {
    loading: boolean;
    error: string | null;
    success: boolean;
}

const initialState: AppState = {
    loading: false,
    error: null,
    success: false,
};

// Create an async thunk for app rate
export const appRate = createAsyncThunk(
    'rate/appRate',
    async (ratePayload: { rate: number }, { rejectWithValue }) => {
      const accessToken = localStorage.getItem("access_token");
      try {
        const response = await axios.post(`${URL__API}/app-rate`, ratePayload, {
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

const appRateSlice = createSlice({
    name: 'appRate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(appRate.pending, (state) => {
                state.loading = true;
            })
            .addCase(appRate.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(appRate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const {} = appRateSlice.actions;

export default appRateSlice.reducer;
