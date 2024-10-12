import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth/userSlice";
import authSlice from "./auth/authSlice";
import settingsSlice from "./SettingsSlice"

export const store = configureStore({
  reducer: {
    userSliceToLogin: userSlice,
    auth: authSlice,
    settings:settingsSlice

  },
  devTools: true,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
