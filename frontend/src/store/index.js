// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import transactionsReducer from "./slices/transactionsSlice";
import plansReducer from "./slices/plansSlice";
import usersReducer from "./slices/usersSlice";
import postsReducer from "./slices/postsSlice";
import commentsReducer from "./slices/commentsSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
    plans: plansReducer,
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
