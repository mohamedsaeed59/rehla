import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TLoading } from "../../Types/app";
import { actAuthLogin } from "./act/ActAuthLogin";
import { actAuthRegister } from "./act/ActAuthRegister";
// @ts-ignore
import Cookie from 'js-cookie'

const API_URL = import.meta.env.VITE_REACT_APP_API_KEY;

// Initial state
interface IAuthState {
  data: {
    access_token: string;
    profileImage: any;
    image: any;
    name: string;
    id: number;
    email: string;
    phone: string;
    address: any;
    city: any;
    city_id: any;
    gender: any;
    age: any;
  };
  status: number;
  message: string;
  loading: TLoading;
  error: string | null;
  skip: boolean;
}
const initialState: IAuthState = {
  data: {
    // access_token: localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')!) : [],
    access_token: "",
    profileImage: "",
    image: "",
    name: "",
    id: 0,
    email: "",
    phone: "",
    address: "",
    city: "",
    city_id: "",
    age: "",
    gender: "",
  },
  status: 0,
  message: "",
  loading: "idle",
  error: null,
  skip: false,
};

// Async thunk for updating profile
export const actUpdateProfile = createAsyncThunk(
  "auth/actUpdateProfile",
  async (
    profileData: {
      name: string;
      email: string;
      phone: string;
      age: number;
      city_id: number;
      address: string;
      gender: string;
    }, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("access_token");

      const response = await axios.post(`${API_URL}/update-profile`, profileData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for changing profile image
export const actChangeProfileImage = createAsyncThunk(
  "auth/actChangeProfileImage",
  async (imageData: File, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
    const formData = new FormData();
    formData.append("image", imageData);

    try {
      const response = await axios.post(`${API_URL}/change-image-profile`, formData, {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data"
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


// Async thunk for deleting account
export const actDeleteAccount = createAsyncThunk( 
  "auth/actDeleteAccount",
  async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await axios.post(
        `${API_URL}/delete-account`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogout: (state) => {
      state.data.access_token = "";
      localStorage.removeItem("access_token");
      Cookie.remove("user");
      Cookie.remove("profileImage");
    },
    setUser: (state, action: any) => {
      state.data = action.payload;
      
    },
    setUserImage: (state, action: any) => {
      state.data.image = action.payload;
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
      if (action.payload.data && action.payload.data.access_token) {
        // @ts-ignore
        if (!state.data) state.data = {}; // Ensure data object exists
        state.data.access_token = action.payload.data.access_token;
        localStorage.setItem("access_token", action.payload.data.access_token);
        Cookie.set("user", JSON.stringify(action.payload.data));
        Cookie.set("profileImage", JSON.stringify(action.payload.data.image));
      }
      state.status = action.payload.status;
    });
    builder.addCase(actAuthLogin.rejected, (state) => {
      state.loading = "failed";
      state.error = "Login failed";
    });

    // Update Profile
    builder.addCase(actUpdateProfile.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actUpdateProfile.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.status = action.payload.status;
      state.message = "Profile updated successfully.";
      if (action.payload.data && action.payload.data.access_token) {
        // state.data.access_token = action.payload.data.access_token;
        // localStorage.setItem("access_token", action.payload.data.access_token);
        Cookie.set("user", JSON.stringify(action.payload.data));
      }
    });
    builder.addCase(actUpdateProfile.rejected, (state, action: any) => {
      state.loading = "failed";      
      // state.error = action.payload.response.data.message as string;
      state.error = action.payload?.response?.data?.message || "Something went wrong";
    });

    // Change Profile Image
    builder.addCase(actChangeProfileImage.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actChangeProfileImage.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.status = action.payload.status;
      state.message = "Profile image updated successfully.";
      state.data.image = action.payload.data.image;
      Cookie.set("profileImage", JSON.stringify(action.payload.data.image));
    });
    builder.addCase(actChangeProfileImage.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });

    // Delete Account
    builder.addCase(actDeleteAccount.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actDeleteAccount.fulfilled, (state, action) => {
      state.loading = "succeeded";
      localStorage.removeItem("access_token");
      Cookie.remove("user");
      Cookie.remove("profileImage");
      state.status = action.payload.status;
      state.message = "Account deleted successfully.";
      state.data = initialState.data; // Reset user data on account deletion
    });
    builder.addCase(actDeleteAccount.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;
export const { authLogout, setUser, setUserImage, handleSkip } = authSlice.actions;