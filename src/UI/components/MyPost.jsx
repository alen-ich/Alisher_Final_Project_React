import { useDispatch, useSelector } from "react-redux";
import { removePost, editPost } from "../../BLL/PostsSlice.js";
import { useEffect, useState } from "react";

import { EditModal } from "./EditModal.jsx";

import "./styles.css";

import Edit from "../../DAL/icons/edit.svg";
import Remove from "../../DAL/icons/remove.svg";

export const MyPost = ({ post }) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { edit_post } = useSelector((sl) => sl.PostsSlice);
  const { profiles } = useSelector((sl) => sl.ProfileSlice);

  const toggleModal = (value) => {
    setModal(value);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`post ${isVisible ? "visible" : ""}`}>
      <div className="img-author-btns">
        <div className="img-and-author">
          <img
            src="https://pushinka.top/uploads/posts/2023-03/1679876768_pushinka-top-p-obichnie-avatarki-na-telefon-pinterest-4.jpg"
            className="post-img"
          ></img>
          <div className="name-and-tag">
            <p className="name">{profiles.name}</p>
            <div className="tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag-space">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="my-posts-btn-wrapper">
          <div
            className="my-posts-btn"
            onClick={() => {
              dispatch(editPost(post));
              toggleModal(true);
            }}
          >
            <img src={Edit} alt="edit" className="icon-rotated" />
          </div>
          <div
            className="my-posts-btn"
            onClick={() => dispatch(removePost(post.id))}
          >
            <img src={Remove} alt="remove" className="icon" />
          </div>
        </div>
      </div>

      <p className="quote">{post.quote}</p>

      {modal ? (
        <EditModal edit_post={edit_post} closeModal={handleCloseModal} />
      ) : null}
    </div>
  );
};
