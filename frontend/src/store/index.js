import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import transactionsReducer from "./slices/transactionsSlice";
import plansReducer from "./slices/plansSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
    plans: plansReducer,
  },
});

export default store;
