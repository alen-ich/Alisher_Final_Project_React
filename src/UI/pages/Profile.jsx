import { LeftColumn } from "../components/LeftColumn.jsx";
import { Header } from "../components/Header.jsx";
import { ProfileComp } from "../components/ProfileComp.jsx";
import { MyPosts } from "../components/MyPosts.jsx";
import { AddPost } from "../components/AddPost.jsx";

import "./stylesPages.css";

export const Profile = () => {
  return (
    <div className="main">
      <Header />
      <div className="profile-wrapper">
        <LeftColumn />
        <div>
          <ProfileComp />
          <div>
            <AddPost />
            <MyPosts />
          </div>
        </div>
      </div>
    </div>
  );
};
