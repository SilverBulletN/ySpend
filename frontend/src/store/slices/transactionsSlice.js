import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "@env";

// Fetch initial data from the API
const fetchInitialData = async (email) => {
  const response = await axios.get(
    `${BASE_URL}/recipes/by-email?email=${email}`
  );
  return response.data;
};

// Create an async thunk to fetch the initial data
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (_, { getState }) => {
    const email = getState().auth.email;
    const response = await fetchInitialData(email);
    return response;
  }
);

// Create an async thunk to add a new transaction
export const addTransactionAsync = createAsyncThunk(
  "transactions/addTransaction",
  async (transaction, { getState }) => {
    const email = getState().auth.email;
    const response = await axios.post(`${BASE_URL}/recipes?email=${email}`, {
      ...transaction,
    });
    return response.data;
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      return action.payload.map((transaction) => ({
        id: transaction.recipe_id,
        owner_id: transaction.owner.user_id,
        avatar_url: transaction.owner.avatar_url,
        recipe_name: transaction.recipe_name,
        status: transaction.status,
        to_vendor: transaction.to_vendor,
        category_id: transaction.category_id,
        image_url: transaction.image_url,
        amount: transaction.amount,
        title: transaction.recipe_name,
        date: "Hôm qua",
        amountString:
          transaction.amount > 0
            ? `+ ${transaction.amount.toLocaleString()} đ`
            : `- ${Math.abs(transaction.amount).toLocaleString()} đ`,
        amountStyle: transaction.amount > 0 ? "text-green-500" : "text-red-500",
        logo: transaction.image_url,
      }));
    });
    builder.addCase(addTransactionAsync.fulfilled, (state, action) => {
      state.push({
        id: action.payload.recipe_id,
        owner_id: action.payload.owner.user_id,
        avatar_url: action.payload.owner.avatar_url,
        recipe_name: action.payload.recipe_name,
        status: action.payload.status,
        to_vendor: action.payload.to_vendor,
        category_id: action.payload.category_id,
        image_url: action.payload.image_url,
        amount: action.payload.amount,
        title: action.payload.recipe_name,
        date: action.payload.date,
        amountString:
          action.payload.amount > 0
            ? `+ ${action.payload.amount.toLocaleString()} đ`
            : `- ${Math.abs(action.payload.amount).toLocaleString()} đ`,
        amountStyle:
          action.payload.amount > 0 ? "text-green-500" : "text-red-500",
        logo: action.payload.image_url,
      });
    });
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
