import { useDispatch } from "react-redux";
import { handlerChangeEditPost, saveEditPost } from "../../BLL/PostsSlice";

import "./styles.css";

import Check from "../../DAL/icons/check.svg";
import Close from "../../DAL/icons/close.svg";

export const EditModal = ({ edit_post, closeModal }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      handlerChangeEditPost({
        name: event.target.name,
        value: event.target.value,
      })
    );
  };

  const handleSave = () => {
    dispatch(saveEditPost(edit_post.id));
    closeModal();
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-wrapper">
        <p className="edit-text">Edit your post</p>
        <div className="edit-modal-input-btns">
          <div className="edit-modal-input">
            <textarea
              className="add-input-textarea"
              placeholder="Enter text message"
              defaultValue={edit_post.quote}
              onChange={handleChange}
              rows="5"
              cols="35"
              name="quote"
            ></textarea>
            <input
              className="add-input-inputarea"
              type="text"
              placeholder="Add tags"
              defaultValue={edit_post.tags}
              onChange={handleChange}
              name="tags"
            ></input>
          </div>
          <div className="edit-btns-wrapper">
            <div className="save-btn" onClick={handleSave}>
              Save
              <img src={Check} alt="check" className="icon" />
            </div>
            <div className="close-btn" onClick={closeModal}>
              Close
              <img src={Close} alt="close" className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
