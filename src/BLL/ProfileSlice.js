import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit_profile: {
    id: null,
    name: "",
    favQuote: [],
    personalInfo: "",
  },
  profiles: {
    id: 123456,
    name: "Alisher Saugabayev",
    favQuote:
      "To live is to suffer, To survive is to find some meaning in the suffering. - Friedrich Nietzsche",
    personalInfo: "Cool University, 25 y.o., live in Almaty",
  },
};

const ProfileSlice = createSlice({
  name: "ProfileSlice",
  initialState,
  reducers: {
    editProfile: (state = initialState, action) => {
      state.edit_profile = { ...action.payload };
    },
    handlerChangeProfile: (state = initialState, { payload }) => {
      if (payload.name === "name") {
        state.edit_profile.name = payload.value;
      }
      if (payload.name === "quote") {
        state.edit_profile.favQuote = payload.value;
      }
      if (payload.name === "info") {
        state.edit_profile.personalInfo = payload.value;
      }
    },
    saveEditProfile: (state = initialState, { payload }) => {
      state.profiles = payload;
    },
  },
});

export const { editProfile, saveEditProfile, handlerChangeProfile } =
  ProfileSlice.actions;

export default ProfileSlice.reducer;
