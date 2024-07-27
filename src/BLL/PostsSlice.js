import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit_post: {
    id: null,
    author: "Alisher Saugabayev",
    tags: [],
    quote: "",
  },
  posts: [
    {
      id: 123456,
      author: "Alisher Saugabayev",
      tags: ["fun", "humor"],
      quote:
        "I would like to invite to figure this one out for yourself! It will be a good excerise to practise what we've learned up till this point.",
    },

    {
      id: 19876,
      author: "Alisher Saugabayev",
      tags: ["wisdom", "life"],
      quote:
        "A nice feature would be to load in users from an external API. We will use this free one:",
    },
  ],
  tags: [],
};

const PostsSlice = createSlice({
  name: "PostsSlice",
  initialState,
  reducers: {
    addPost: (state = initialState, action) => {
      const newPost = {
        ...action.payload,
        tags: state.tags,
      };
      state.posts = [newPost, ...state.posts];
      state.tags = [];
    },
    addTags: (state = initialState, action) => {
      state.tags = [...state.tags, ...action.payload];
    },
    removePost: (state = initialState, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    editPost: (state = initialState, action) => {
      state.edit_post = { ...action.payload };
    },
    handlerChangeEditPost: (state = initialState, { payload }) => {
      if (payload.name === "quote") {
        state.edit_post.quote = payload.value;
      }
      if (payload.name === "tags") {
        state.edit_post.tags = payload.value.split(",");
      }
    },
    saveEditPost: (state = initialState, { payload }) => {
      state.posts = state.posts.map((post) =>
        post.id === payload
          ? {
              ...post,
              quote: state.edit_post.quote,
              tags: state.edit_post.tags,
            }
          : post
      );
    },
  },
});

export const {
  addPost,
  addTags,
  removePost,
  editPost,
  handlerChangeEditPost,
  saveEditPost,
} = PostsSlice.actions;

export default PostsSlice.reducer;
