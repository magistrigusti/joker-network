import myfoto1 from "../img/myfoto-1.png";
import myfoto2 from "../img/myfoto-2.png";
import myfoto3 from "../img/myfoto-3.png";
import myfoto4 from "../img/myfoto-4.png";
import myAvatar from "../img/avatars/avatar.png";
import myfoto5 from "../img/myfoto-5.png";
import myfoto6 from "../img/myfoto-6.png";
import myfoto7 from "../img/myfoto-7.png";
import myfoto8 from "../img/joker-img.png";
import myfoto9 from "../img/joker-photo.png";
import myfoto10 from "../img/joker-photo2.png";
import myfoto11 from "../img/joker-photo3.png";
import myfoto12 from "../img/joker-photo4.png";

const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  profileData: {
    userId: 1,
    fullName: "Knyazhe",
    yearsOld: 39,
    aboutMe: "I'm a freelance web developer",
    userStatus: "I'm a joker",
    lookingForAJob: false,
    lookingForAJobDescription: "",
    contacts: {
      facebook: null,
      vk: null,
      twitter: null,
      instagram: null,
      github: null,
    },
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
    },
    photosLarge: [
      { id: 1, name: myfoto3 },
      { id: 2, name: myfoto2 },
      { id: 3, name: myfoto1 },
      { id: 4, name: myfoto4 },
      { id: 5, name: myfoto5 },
      { id: 6, name: myfoto6 },
      { id: 7, name: myfoto7 },
      { id: 8, name: myfoto8 },
      { id: 9, name: myfoto9 },
      { id: 10, name: myfoto10 },
      { id: 11, name: myfoto11 },
      { id: 12, name: myfoto12 },
    ],
  },
  status: "I'm looking for new opportunities",
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state, 
        profileData: {
          ...state.profileData,
          ...action.profile,
          contacts: {
            ...state.profileData.contacts, // Используем существующие контакты из initialState
            ...action.profile.contacts // Обновляем только те, что пришли в ответе
          },
          photos: {
            small: action.profile?.photos?.small || state.profileData.photos.small,
            large: action.profile?.photos?.large || state.profileData.photos.large
          }
        }
      };
    }
    default: 
      return state;
  }
};


export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;
