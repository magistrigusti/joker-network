import { createSlice } from '@reduxjs/toolkit';
import myfoto1 from '../img/myfoto-1.png';
import myfoto2 from '../img/myfoto-2.png';
import myfoto3 from '../img/myfoto-3.png';
import myfoto4 from '../img/myfoto-4.png';
import myAvatar from "../img/avatar.png";
import myfoto5 from "../img/myfoto-5.png";
import myfoto6 from "../img/myfoto-6.png";

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      userId: 1,
      fullName: "Knyazhe",
      yearsOld: 39,
      aboutMe: "I'm a freelance web developer",
      userStatus: "I'm a joker",
      photos: { avatar: myAvatar },
      photosLarge: [
        { id: 1, name: myfoto3 },
        { id: 2, name: myfoto2 },
        { id: 3, name: myfoto1 },
        { id: 4, name: myfoto4 },
        { id: 5, name: myfoto5 },
        { id: 6, name: myfoto6 },
      ]
    },
    status: "I'm looking for new opportunities",
  },
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { updateStatus } = profileSlice.actions;

export default profileSlice.reducer;
