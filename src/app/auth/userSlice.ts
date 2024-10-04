import { createSlice } from "@reduxjs/toolkit";

type Props = {
  phoneOrEmail: string;
  Otp2: string;
};

const initialState: Props = {
  phoneOrEmail: "",
  Otp2: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPhoneOrEmail: (state, action) => {
      state.phoneOrEmail = action.payload;
    },
    setOtp: (state, action) => {
        console.log(action.payload);
      state.Otp2 = action.payload;
      
    },
  },
});

export const { setPhoneOrEmail, setOtp } = userSlice.actions;
export default userSlice.reducer;
