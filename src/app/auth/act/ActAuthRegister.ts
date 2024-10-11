import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PropsInputsRegister } from "../../../Types/app";
import { toast } from "react-toastify";

const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;

type TResponse = {
  message: string;
  status: number;
  data: {
    access_token: string;
    user: {
      id: number;
      email: string;
      name: string;
      phone: string;
    } | null;
  };
};

export const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (data: PropsInputsRegister, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post<TResponse>(
        `${URL__API}/auth/add-waiting-user`,
        data,
        config
      );
      //   navigate("/tellUs");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || error.message);
        return rejectWithValue(error.response?.data);
      } else {
        console.log("Unexpected error:", error);
        return rejectWithValue(error);
      }
    }
  }
);
