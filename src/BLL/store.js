import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./PostsSlice.js";
import ProfileSlice from "./ProfileSlice.js";

export const store = configureStore({
  reducer: {
    PostsSlice,
    ProfileSlice,
  },
});
