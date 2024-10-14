import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../Types/app";
import { actAuthLogin } from "./act/ActAuthLogin";
import { actAuthRegister } from "./act/ActAuthRegister";

interface IAuthState {
  data: {
    access_token: string;
    // 
// user_token: "9pnkhz9o49ygi" access_token
    user: string;
    id: number;
    email: string;
    phone: string;
  };
  status: number;
  loading: TLoading;
  error: string | null;
  skip: boolean;
  message: string;
}

const initialState: IAuthState = {
  data: {
    access_token: localStorage.getItem("access_token") || "",
    user: "",
    id: 0,
    email: "",
    phone: "",
  },
  status: 0,
  loading: "idle",
  error: null,
  skip: false,
  message: "",
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
      console.log(action.payload);
      state.message = action.payload.message;
      state.status = action.payload.status;
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
      console.log(action.payload);
      state.data.user = action.payload.data.name;
      state.status = action.payload.status;
    });
    builder.addCase(actAuthLogin.rejected, (state) => {
      state.loading = "failed";
      state.error = "Login failed";
    });
  },
});

export default authSlice.reducer;
export const { authLogout, handleSkip } = authSlice.actions;
