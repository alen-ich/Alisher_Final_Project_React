import { LeftColumn } from "../components/LeftColumn.jsx";
import { Header } from "../components/Header.jsx";
import { PostsWrapper } from "../components/PostsWrapper.jsx";

import "./stylesPages.css";

export const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-wrapper">
        <LeftColumn />
        <PostsWrapper />
      </div>
    </div>
  );
};
