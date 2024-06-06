import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulate fetching data from a database
const fetchInitialPlansData = async () => {
  return [
    {
      id: "1",
      owner_id: "owner_1",
      type: "week",
      week: "49 - 2023",
      month: "12",
      year: "2023",
      limit_amount: 15000000,
      color_hex: "#34D399", // Tailwind's 'green-400' equivalent
      category_id: "category_1",
    },
    {
      id: "2",
      owner_id: "owner_2",
      type: "week",
      week: "50 - 2023",
      month: "12",
      year: "2023",
      limit_amount: 12500000,
      color_hex: "#34D399",
      category_id: "category_1",
    },
    // Add more plans as needed
  ];
};

// Create an async thunk to fetch the initial data
export const fetchPlans = createAsyncThunk("plans/fetchPlans", async () => {
  const response = await fetchInitialPlansData();
  return response;
});

const plansSlice = createSlice({
  name: "plans",
  initialState: [],
  reducers: {
    addPlan: (state, action) => {
      state.push(action.payload);
    },
    // Other reducers can be added here (e.g., removePlan, updatePlan)
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlans.fulfilled, (state, action) => {
      return action.payload.map((plan) => ({
        id: plan.id,
        owner_id: plan.owner_id,
        type: plan.type,
        week: plan.week,
        month: plan.month,
        year: plan.year,
        limit_amount: plan.limit_amount,
        color_hex: plan.color_hex,
        category_id: plan.category_id,
      }));
    });
  },
});

export const { addPlan } = plansSlice.actions;
export default plansSlice.reducer;
