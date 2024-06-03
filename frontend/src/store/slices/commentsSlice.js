import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulate fetching data from a database
const fetchInitialCommentsData = async (postId, existingCommentIds) => {
  // Simulate fetching only new comments
  return [
    {
      post_id: postId,
      user_id: "1",
      cmt_date: "2023-12-01T10:00:00",
      comment: "Hay đấy!",
    },
    // Add more comments as needed
  ].filter((comment) => !existingCommentIds.includes(comment.cmt_date));
};

// Create an async thunk to fetch the initial data
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async ({ postId, existingCommentIds }) => {
    const response = await fetchInitialCommentsData(postId, existingCommentIds);
    return { postId, comments: response };
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      if (!state[postId]) {
        state[postId] = [];
      }
      comments.forEach((comment) => {
        if (
          !state[postId].some(
            (existingComment) => existingComment.cmt_date === comment.cmt_date
          )
        ) {
          state[postId].push(comment);
        }
      });
    });
  },
});

export default commentsSlice.reducer;
