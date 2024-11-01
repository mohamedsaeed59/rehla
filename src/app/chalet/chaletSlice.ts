import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

// Async action to fetch chalet details
export const fetchChaletDetails = createAsyncThunk(
  'chalet/fetchChaletDetails',
  async (chaletParam: any, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await axios.get(`${URL__API}/ad?id=${chaletParam.id}&lang=${chaletParam.lang}`,
        {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async action to fetch chalet details
export const getComments = createAsyncThunk(
    'chalet/getComments',
    async (commentParam: any, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${URL__API}/ad-comments?id=${commentParam.id}&lang=${commentParam.lang}`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error);
    }
    }
  );

// Async action to fetch Search Results
  export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async ({ searchQuery, cityId, minAdults, maxAdults, popular, lastAdd }: any) => {
      const response = await axios.get(`${URL__API}/ads`, {
        params: {
          page: 1,
          serach: searchQuery,
          city_id: cityId,
          min_no_adults: minAdults,
          max_no_adults: maxAdults,
          popular,
          last_add: lastAdd,
        },
      });
      return response.data;
    }
  );

const chaletSlice = createSlice({
  name: 'chalet',
  initialState: {
    chaletDetails: null,
    searchResults: [],
    comment: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // fetchChaletDetails
    builder.addCase(fetchChaletDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchChaletDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.chaletDetails = action.payload;
      });
      builder.addCase(fetchChaletDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });

      // Get comments
      builder.addCase(getComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(getComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comment = action.payload;
      });
      builder.addCase(getComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
    });

    // search
      builder.addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.data;
      })
      builder.addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any
      });
  },
});

export default chaletSlice.reducer;
