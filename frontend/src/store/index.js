import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import transactionsReducer from "./slices/transactionsSlice";
import plansReducer from "./slices/plansSlice";
import postSlice from "./slices/postsSlice";
import usersSlice from "./slices/usersSlice";
import commentsSlice from "./slices/commentsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
    plans: plansReducer,
    posts: postSlice,
    users: usersSlice,
    comments: commentsSlice,
  },
});

export default store;
