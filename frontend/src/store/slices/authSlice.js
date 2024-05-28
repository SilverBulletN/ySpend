import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isAuthenticated: false,
  firstName: "",
  lastName: "",
  profileImage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const {
  setEmail,
  setAuthenticated,
  setFirstName,
  setLastName,
  setProfileImage,
} = authSlice.actions;
export default authSlice.reducer;
