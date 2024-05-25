import { createSlice } from "@reduxjs/toolkit";
import { addPost, deletePost, fetchPosts } from "./crudThunk";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "Fail";
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(postUpdate.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload.id);
        state.posts[index] = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.filter((post) => post.id !== action.payload);
      });
  },
});

export default postsSlice.reducer