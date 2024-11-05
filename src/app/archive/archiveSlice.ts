// src/store/archiveSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

// Async thunk for archiving an ad
export const archiveAd = createAsyncThunk(
    'archive/archiveAd',
    async (ad_id: any, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
        try {
            const response = await axios.post(`${URL__API}/archive-ad`, ad_id, {
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

// Async thunk for un-archiving an ad
export const unarchiveAd = createAsyncThunk(
    'archive/unarchiveAd',
    async (ad_id: any, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
        try {
            const response = await axios.post(`${URL__API}/un-archive-ad`, ad_id, {
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

// Async thunk for user archive
  export const userArchive = createAsyncThunk(
    'archive/userArchive',
    async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
        try {
            const response = await axios.get(`${URL__API}/user-archive-list?popular=2`, {
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

const archiveSlice = createSlice({
  name: 'archive',
  initialState: {
    loading: false,
    error: null,
    successMessage: null,
    archive: [],
  },
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Archive ad cases
      .addCase(archiveAd.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(archiveAd.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(archiveAd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      })

      // Unarchive ad cases
      .addCase(unarchiveAd.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(unarchiveAd.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(unarchiveAd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
        });

         // user archieve
         builder
         .addCase(userArchive.pending, (state) => {
             state.loading = true;
         })
         .addCase(userArchive.fulfilled, (state, action) => {
             state.loading = false;
             state.archive = action.payload.data;
         })
         .addCase(userArchive.rejected, (state, action) => {
             state.loading = false;
             state.error = action.payload as any;
         });
  },
});

export const { clearMessages } = archiveSlice.actions;
export default archiveSlice.reducer;
