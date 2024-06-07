import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulate fetching data from a database
const fetchInitialUsersData = async () => {
  return [
    {
      user_id: "1",
      first_name: "Minh",
      last_name: "Nguyen Tuan",
      email: "minh.nguyentuan@gmail.com",
      avatar_url:
        "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/312524461_3366611090333071_465695464507083484_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3w5drj174qgQ7kNvgGyLsSZ&_nc_ht=scontent.fsgn16-1.fna&oh=00_AYD4p0LC2OmG7byoaDDDKRN-91aB09rb7BSq4ojgQfFSYw&oe=66625F59",
    },
    {
      user_id: "2",
      first_name: "Hiếu",
      last_name: "Nguyễn",
      email: "nguyen.vana@gmail.com",
      avatar_url: "https://nguoinoitieng.tv/images/nnt/103/0/bhbg.jpg",
    },
    // Add more users as needed
  ];
};

// Create an async thunk to fetch the initial data
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetchInitialUsersData();
  return response;
});

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    // Other reducers can be added here (e.g., removeUser, updateUser)
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
