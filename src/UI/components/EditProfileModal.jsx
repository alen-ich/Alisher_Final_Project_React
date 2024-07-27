import { useDispatch } from "react-redux";
import { handlerChangeProfile, saveEditProfile } from "../../BLL/ProfileSlice";

import "./styles.css";

import Check from "../../DAL/icons/check.svg";
import Close from "../../DAL/icons/close.svg";

export const EditProfileModal = ({ edit_profile, closeModal }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      handlerChangeProfile({
        name: event.target.name,
        value: event.target.value,
      })
    );
  };

  const handleSave = () => {
    dispatch(saveEditProfile(edit_profile));
    closeModal();
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-wrapper">
        <p className="edit-text">Edit your profile</p>
        <div className="edit-modal-input-btns">
          <div className="edit-modal-input">
            <input
              className="profile-input"
              placeholder="Enter quote"
              defaultValue={edit_profile.name}
              onChange={handleChange}
              name="name"
            ></input>
            <input
              className="profile-input"
              placeholder="Enter quote"
              defaultValue={edit_profile.favQuote}
              onChange={handleChange}
              name="quote"
            ></input>
            <input
              className="profile-input"
              type="text"
              placeholder="Enter personal info"
              defaultValue={edit_profile.personalInfo}
              onChange={handleChange}
              name="info"
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
