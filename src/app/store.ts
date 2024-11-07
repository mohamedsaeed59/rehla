import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth/userSlice";
import authSlice from "./auth/authSlice";
import settingsSlice from "./SettingsSlice"
import homeReducer from './home/homeSlice';
import chaletReducer from './chalet/chaletSlice';
import orderReducer from './order/orderSlice';
import archiveReducer from './archive/archiveSlice';
import appRateReducer from './rate/rateSlice';
import notificationReducer from './notification/notificationSlice';

export const store = configureStore({
  reducer: {
    userSliceToLogin: userSlice,
    auth: authSlice,
    settings:settingsSlice,
    home: homeReducer,
    chalet: chaletReducer,
    order: orderReducer,
    archive: archiveReducer,
    appRate: appRateReducer,
    notifications: notificationReducer,
  },
  devTools: true,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
