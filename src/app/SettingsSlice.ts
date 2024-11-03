import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TCity, TResponse } from "../Types/settings.types";

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

const initialState = {
  data: {
    cities: null as TCity[] | null,
    terms_title: "",
    terms_body: "",
    policy_title: "",
    policy_body: "",
    onborad_pages: null,
    tax: 0,
  },
  status: 0,
  message: "",
  loading: "idle",
  error: null as string | null,
};

export const actSettings = createAsyncThunk<
    TResponse,
    string,
    { rejectValue: any }
  >(
  "setting/actSettings",
  async (lang, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `${URL__API}/settings?lang=${lang}`
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
      state.data.terms_title = action.payload.data.terms_title;
      state.data.terms_body = action.payload.data.terms_body;
      state.data.policy_title = action.payload.data.policy_title;
      state.data.policy_body = action.payload.data.policy_body;
      state.data.onborad_pages = action.payload.data.onborad_pages;
      state.data.tax = action.payload.data.tax;
    });
    builder.addCase(actSettings.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default settingsSlice.reducer;
