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
        "Tuổi trẻ nếu bạn không thể độc lập về tài chính vào lúc bạn bốn mươi hay năm mươi tuổi, điều đó không có nghĩa là bạn không gặp đúng thời ở vào đúng quốc gia. Nó chỉ đơn giản là bạn đã lập kế hoạch sai.",
      image:
        "https://th.bing.com/th/id/R.c822aa6fc83b446ca72f15cad456caaa?rik=tD%2f%2b%2bJ8jCU0nZQ&pid=ImgRaw&r=0",
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
