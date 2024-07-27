import { useSelector, useDispatch } from "react-redux";
import { editProfile } from "../../BLL/ProfileSlice";
import { useState } from "react";

import { EditProfileModal } from "../components/EditProfileModal";

export const ProfileComp = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const { profiles } = useSelector((sl) => sl.ProfileSlice);
  const { edit_profile } = useSelector((sl) => sl.ProfileSlice);

  const toggleModal = (value) => {
    setModal(value);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="profile-comp-wrapper">
      <img
        src="https://pushinka.top/uploads/posts/2023-03/1679876768_pushinka-top-p-obichnie-avatarki-na-telefon-pinterest-4.jpg"
        className="profile-img"
      ></img>
      <div className="info-wrapper">
        <div className="info">
          <p className="info-name">{profiles.name}</p>
          <p className="info-other">{profiles.favQuote}</p>
          <p className="info-education">{profiles.personalInfo}</p>
        </div>
        <div
          className="profile-edit-btn"
          onClick={() => {
            dispatch(editProfile(profiles));
            toggleModal(true);
          }}
        >
          Edit profile
        </div>
      </div>

      {modal ? (
        <EditProfileModal
          edit_profile={edit_profile}
          closeModal={handleCloseModal}
        />
      ) : null}
    </div>
  );
};
