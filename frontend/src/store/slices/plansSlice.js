import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    owner_id: "owner_1",
    type: "week",
    week: "49 - 2023",
    month: "12",
    year: "2023",
    limit_amount: 125000000,
    color_hex: "#34D399", // Tailwind's 'green-400' equivalent
    category_id: "category_1",
  },
  {
    id: "2",
    owner_id: "owner_2",
    type: "week",
    week: "49 - 2023",
    month: "12",
    year: "2023",
    limit_amount: 125000000,
    color_hex: "#34D399",
    category_id: "category_1",
  },
  // Add more plans as needed
];

const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    addPlan: (state, action) => {
      state.push(action.payload);
    },
    // Other reducers can be added here (e.g., removePlan, updatePlan)
  },
});

export const { addPlan } = plansSlice.actions;
export default plansSlice.reducer;
