import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PropsInputsLogin } from "../../../Types/app";
const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

type TResponse = {
  // user: {
  //   id: number;
  //   email: string;
  //   name: string;
  //   phone: string;
  // };
  data: {
    access_token: string;
    id: number;
    email: string;
    name: string;
    phone: string;
  };
};

export const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (data: PropsInputsLogin, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post<TResponse>(
        `${URL__API}/auth/login-phone`,
        data,
        config
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
