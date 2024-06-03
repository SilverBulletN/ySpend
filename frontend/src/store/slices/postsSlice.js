import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulate fetching data from a database
const fetchInitialPostsData = async () => {
  return [
    {
      post_id: "1",
      author_id: "1",
      publish_date: "2023-12-01T08:39:00",
      total_likes: 1964,
      total_cmts: 135,
      content:
        "Thay vì ăn một ngày 3 bữa, mỗi bữa 50k, hãy ăn một ngày 4 bữa, mỗi bữa 30k. Như vậy vừa giúp tiết kiệm, vừa giúp giảm cân",
      image:
        "https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain",
    },
    {
      post_id: "2",
      author_id: "2",
      publish_date: "2023-12-01T08:39:00",
      total_likes: 1964,
      total_cmts: 135,
      content:
        "Thay vì ăn một ngày 3 bữa, một bữa 50k, hãy ăn một ngày 4 bữa, một bữa 30k. Như với vừa giúp tiết kiệm, vừa giúp giảm cân",
      image:
        "https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain",
    },
  ];
};

// Create an async thunk to fetch the initial data
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetchInitialPostsData();
  return response;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    // Other reducers  removePost, updatePost
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
