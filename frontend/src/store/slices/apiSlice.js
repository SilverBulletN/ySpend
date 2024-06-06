// src/store/slices/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.112:3000" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
    updateUserProfile: builder.mutation({
      query: ({ email, profileData }) => ({
        url: `/users/email/${email}`,
        method: "PUT",
        body: profileData,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useUpdateUserProfileMutation,
  useLoginUserMutation,
} = apiSlice;
