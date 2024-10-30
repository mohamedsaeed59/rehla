import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HomeTypes } from "./home.types";

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

const initialState = {
  data: {
    banners: null as any,
    recently_ads: null as any,
    popular_ads: null as any,
    close_ads: null as any,
  },
  status: 0,
  message: "",
  loading: "idle" as "idle" | "pending" | "succeeded" | "failed",
  error: null as string | null,
};

export const actFetchHomeScreen = createAsyncThunk(
  "home/actFetchHomeScreen",
  async (location: any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<HomeTypes>(
        `${URL__API}/home-screen?lang=${location.lang}&lat=${33.3303718457}&lon=${44.3855353472}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actFetchHomeScreen.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actFetchHomeScreen.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.data.banners = action.payload.data.banners;
      state.data.recently_ads = action.payload.data.recently_ads;
      state.data.popular_ads = action.payload.data.popular_ads;
      state.data.close_ads = action.payload.data.close_ads;
    });
    builder.addCase(actFetchHomeScreen.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default homeSlice.reducer;