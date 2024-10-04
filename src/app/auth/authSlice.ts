import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../Types/app";
import { actAuthLogin } from "./act/ActAuthLogin";

interface IAuthState {
  data: {
    access_token: string;
    user: {
      id: number;
      email: string;
      name: string;
      phone: string;
    } | null;
  };
  loading: TLoading;
  error: string | null;
  skip: boolean;
}

const initialState: IAuthState = {
  data: {
    access_token: localStorage.getItem("access_token") || "",
    user: null,
  },
  loading: "idle",
  error: null,
  skip: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogout: (state) => {
      state.data.access_token = "";
      state.data.user = null;
      localStorage.removeItem("access_token");
    },
    handleSkip: (state) => {
      state.skip = true;
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";

      //   state.data.access_token = action.payload.accessToken;
      // //   console.log(action.payload.data.access_token);
      //   localStorage.setItem("access_token", action.payload.data.access_token);
      //   state.data.user = action.payload.data

      state.data.access_token = action.payload.data.access_token;
      localStorage.setItem("access_token", action.payload.data.access_token);
      // console.log(action.payload.data);
      state.data = action.payload.data;
    });
    builder.addCase(actAuthLogin.rejected, (state) => {
      state.loading = "failed";
      state.error = "Login failed";
    });
  },
});

export default authSlice.reducer;
export const { authLogout , handleSkip} = authSlice.actions;
