import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isAuthenticated: false,
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
  },
});

export const { setEmail, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
