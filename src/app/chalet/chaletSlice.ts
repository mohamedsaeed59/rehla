import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

// Async action to fetch chalet details
export const fetchChaletDetails = createAsyncThunk(
  'chalet/fetchChaletDetails',
  async (chaletId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URL__API}/ad?id=${chaletId}&lang=en`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const chaletSlice = createSlice({
  name: 'chalet',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChaletDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChaletDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchChaletDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default chaletSlice.reducer;
