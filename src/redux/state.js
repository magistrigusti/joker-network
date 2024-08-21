import sahaAvatar from '../img/sahajpg.jpg';
import mashaAvatar from '../img/masha.png';
import radmilaAvatar from '../img/radmila.png';
import annaAvatar from '../img/anna.png';
import myAvatar from "../img/avatar.png";
import yanaAvatar from '../img/yanaavatarjpg.jpg';
import myfoto1 from '../img/myfoto-1.png';
import myfoto2 from '../img/myfoto-2.png';
import myfoto3 from '../img/myfoto-3.png';
import myfoto4 from '../img/myfoto-4.png';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    postsPage: {
      postsData: [
        { id: 1, message: "Hi, my frends.", likeCount: 5 },
        { id: 2, message: "How are your life", likeCount: 12 },
        { id: 3, message: "welcome to my social network", likeCount: 17 }
      ],
      newPostText: 'Joker',
    },

    profilePage: {
      profile: {
        userId: 1,
        fullName: "Knyazhe",
        yearsOld: 38,
        aboutMe: "I'm a freelance web developer",
        userStatus: "I'm a joker",
        photos: { avatar: myAvatar },
        photosLarge: [
          { id: 1, name: myfoto3 },
          { id: 2, name: myfoto2 },
          { id: 3, name: myfoto1 },
          { id: 4, name: myfoto4 },
        ]

      },
      status: "I'm looking for new opportunities",
      contacts: {
        github: "https://github.com/sahajoker",
        vk: "https://vk.com/sahajoker",
        facebook: "https://www.facebook.com/sahajoker"
      },
      lookingForAJob: true,
      lookingForFriends: true,
    },

    friendsPage: {
      usersData: [
        { id: 1, name: "Saha", avatar: sahaAvatar, country: "Izrael", city: "Holon", status: "online" },
        { id: 2, name: "Masha", avatar: mashaAvatar, country: "Russia", city: "Moscow", status: "ofline" },
        { id: 3, name: "Radmila", avatar: radmilaAvatar, country: "Russia", city: "Electrostal", status: "ofline" },
        { id: 4, name: "Anna", avatar: annaAvatar, country: "Russia", city: "Ivanovo", status: "ofline" },
        { id: 5, name: "Yana", avatar: yanaAvatar, country: "Russua", city: "Mosrow", status: "online" }
      ],
    },

    dialogsPage: {
      usersData: [
        { id: 1, name: "Saha", avatar: sahaAvatar },
        { id: 2, name: "Masha", avatar: mashaAvatar },
        { id: 3, name: "Radmila", avatar: radmilaAvatar },
        { id: 4, name: "Anna", avatar: annaAvatar }
      ],

      messagesData: [
        { id: 1, message: "Hello Saha" },
        { id: 2, message: "How are you feel" },
        { id: 3, message: "I'm fine, thank you" },
        { id: 4, message: "But I'm busy now" }
      ],
    },

    sidebarPage: {
      sidebarData: [
        { id: 1, to: "/profile", name: "Profile" },
        { id: 2, to: "/posts", name: "Posts" },
        { id: 3, to: "/friends", name: "Friends" },
        { id: 4, to: "/dialogs", name: "Dialogs" },
        { id: 5, to: "/news", name: "News" },
        { id: 6, to: "/music", name: "Music" },
        { id: 7, to: "/video", name: "Video" },
        { id: 8, to: "/settings", name: "Settings" }
      ]
    }

  },
  _callSubscriber() {
    console.log("State is changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // _addPost() {

  // },
  // _updateNewPostText(newText) {

  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      // this._addPost();
      let newPost = {
        id: 4,
        message: this._state.postsPage.newPostText,
        likeCount: 0
      };
      this._state.postsPage.postsData.push(newPost);
      this._state.postsPage.newPostText = "";
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      // this._updateNewPostText(action.newText);
      this._state.postsPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => {
  return { type: ADD_POST }
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}


window.store = store;

export default store;