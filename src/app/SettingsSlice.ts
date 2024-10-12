import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TCity, TResponse } from "../Types/settings.types";

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

const initialState = {
  data: {
    cities: null as TCity[] | null,
  },
  status: 0,
  message: "",
  loading: "idle",
  error: null as string | null,
};

export const actSettings = createAsyncThunk(
  "setting/actSettings",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `${URL__API}/settings?lang=en`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const settingsSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actSettings.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actSettings.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data.cities = action.payload.data.cities || [];
    });
    builder.addCase(actSettings.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default settingsSlice.reducer;
