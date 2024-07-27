import { useSelector } from "react-redux";
import { MyPost } from "./MyPost.jsx";

import "./styles.css";

export const MyPosts = () => {
  const { posts } = useSelector((slices) => slices.PostsSlice);

  return (
    <div className="my-posts">
      {posts.map((post) => (
        <MyPost key={post.id} post={post} />
      ))}
    </div>
  );
};
