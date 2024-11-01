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
    name: string;
    id: number;
    email: string;
    phone: string;
    address: any;
    city: any;
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
    access_token: localStorage.getItem("access_token") || "",
    profileImage: localStorage.getItem("profileImage"),
    name: "",
    id: 0,
    email: "",
    phone: "",
    address: "",
    city: "",
    age: "",
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
  async (profileData: { name: string; email: string; phone: string; age: string; city_id: any; address: string; gender: string }, { rejectWithValue }) => {
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
      const response = await axios.post(`${API_URL}/delete-account`,
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
      // state.data.profileImage = "";
      localStorage.removeItem("access_token");
    },
    setUser: (state, action: any) => {
      state.data = action.payload;
    },
    setUserImage: (state, action: any) => {
      state.data.profileImage = action.payload
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
      Cookie.set("user", JSON.stringify(action.payload.data))
      console.log('action.payload', action.payload);
      state.data.name = action.payload.data.name;
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
      state.data.name = action.payload.data.data.name;
    });
    builder.addCase(actUpdateProfile.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
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
      state.data.profileImage = action.payload.data.image;
      localStorage.setItem("profileImage", action.payload.data.image);
      // state.data.profileImage = action.payload.data.image;
      // Cookie.set("user", JSON.stringify(action.payload.data))
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