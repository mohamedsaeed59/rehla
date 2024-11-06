import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PropsInputsLogin } from "../../../Types/app";
import { toast } from "react-toastify";


const URL__API = import.meta.env.VITE_REACT_APP_API_KEY;


type TResponse = {
  status: number;
 data: {
    image: any;
    access_token: string;
    id: number;
    email: string;
    name: string;
    phone: string;
  };
};

const lng = localStorage.getItem("i18nextLng") || "en";

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
        `${URL__API}/auth/login-phone?lang=${lng}`,
        data,
        config
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
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
