import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../Types/app";
import { actAuthLogin } from "./act/ActAuthLogin";
import { actAuthRegister } from "./act/ActAuthRegister";

interface IAuthState {
  data: {
    access_token: string;
    user: string;
    id: number;
    email: string;
    phone: string;
  };
  loading: TLoading;
  error: string | null;
  skip: boolean;
  message: string;
  statusData: number;
}

const initialState: IAuthState = {
  data: {
    access_token: localStorage.getItem("access_token") || "",
    user: "",
    id: 0,
    email: "",
    phone: "",
  },
  loading: "idle",
  error: null,
  skip: false,
  message: "",
  statusData: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogout: (state) => {
      state.data.access_token = "";
      state.data.user = "";
      localStorage.removeItem("access_token");
    },
    handleSkip: (state) => {
      state.skip = true;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state, action) => {
      state.loading = "succeeded";
      // console.log(action.payload);
      state.message = action.payload.message;
      state.statusData = action.payload.status;
    });
    builder.addCase(actAuthRegister.rejected, (state) => {
      state.loading = "failed";
      state.error = "Login failed";
    });

    // login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data.access_token = action.payload.data.access_token;
      localStorage.setItem("access_token", action.payload.data.access_token);
      // console.log(action.payload);
      state.data.user = action.payload.data.name;
    });
    builder.addCase(actAuthLogin.rejected, (state) => {
      state.loading = "failed";
      state.error = "Login failed";
    });
  },
});

export default authSlice.reducer;
export const { authLogout, handleSkip } = authSlice.actions;
