import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;

interface NotificationState {
  loading: boolean;
  error: string | null;
  notifications: any[];
  notificationCount: number;
  success: boolean;
}

const initialState: NotificationState = {
  loading: false,
  error: null,
  notifications: [],
  notificationCount: 0,
  success: false,
};

// Async thunk to fetch notifications
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await axios.get(`${URL_API}/user-notifications`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to fetch notification count
export const fetchNotificationCount = createAsyncThunk(
  'notifications/fetchNotificationCount',
  async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await axios.get(`${URL_API}/count-notification`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to mark notifications as seen
export const markNotificationsAsSeen = createAsyncThunk(
  'notifications/markNotificationsAsSeen',
  async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await axios.post(`${URL_API}/notification-seen`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Notifications
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
        state.success = true;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Fetch Notification Count
      .addCase(fetchNotificationCount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotificationCount.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationCount = action.payload;
        state.success = true;
      })
      .addCase(fetchNotificationCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Mark Notifications as Seen
      .addCase(markNotificationsAsSeen.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(markNotificationsAsSeen.fulfilled, (state) => {
        state.loading = false;
        state.notificationCount = 0; // Reset count after marking as seen
        state.success = true;
      })
      .addCase(markNotificationsAsSeen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default notificationSlice.reducer;
