import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulate fetching data from a database
const fetchInitialData = async () => {
  return [
    {
      recipe_id: "1",
      owner_id: "1",
      avatar_url:
        "https://th.bing.com/th/id/OIP.bTgoyhk0ZaoilosSUAw5yAHaHa?rs=1&pid=ImgDetMain",
      recipe_name: "Lương 4/2024",
      status: "Done",
      to_vendor: "Google Company",
      category_id: "6",
      image_url: "https://placehold.co/600x400",
      amount: 1250000,
    },
    {
      recipe_id: "2",
      owner_id: "1",
      avatar_url:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png",
      recipe_name: "Thanh toán Netflix 4/2024",
      status: "Done",
      to_vendor: "Netflix",
      category_id: "2",
      image_url: "https://placehold.co/600x400",
      amount: -252000,
    },
    {
      recipe_id: "3",
      owner_id: "1",
      avatar_url:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflx-Symbol.png",
      recipe_name: "Thanh toán ăn trưa 5/2024",
      status: "Done",
      to_vendor: "Unknown",
      category_id: "2",
      image_url: "https://placehold.co/600x400",
      amount: -252000,
    },
  ];
};

// Create an async thunk to fetch the initial data
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const response = await fetchInitialData();
    return response;
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
        owner_id: transaction.owner_id,
        avatar_url: transaction.avatar_url,
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
        logo: transaction.avatar_url,
      }));
    });
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
