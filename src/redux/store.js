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
import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaDiagramNext } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import  postsReducer  from "./posts-reducer";
import  dialogsReducer  from './dialogs-reducer';

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
        yearsOld: 39,
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

      newMessageBody: ''
    },

    sidebarPage: {
      sidebarData: [
        { id: 1, to: "/profile", name: "Profile", icon: <FaHome /> },
        { id: 2, to: "/posts", name: "Posts", icon: <FaDiagramNext /> },
        { id: 3, to: "/friends", name: "Friends", icon: <FaPeopleGroup /> },
        { id: 4, to: "/dialogs", name: "Dialogs", icon: <FaMessage /> },
        { id: 5, to: "/news", name: "News",icon: <FaNewspaper /> },
        { id: 6, to: "/music", name: "Music", icon: <FaMusic /> },
        { id: 7, to: "/video", name: "Video", icon: <FaVideo /> },
        { id: 8, to: "/settings", name: "Settings", icon: <FaGear /> }
      ]
    },

    musicPage: {
      musicBtnData: [
        { id: 1, name: "All" },
        { id: 2, name: "Favorites" },
        { id: 3, name: "Rock", src: "rock.mp3" },
        { id: 4, name: "Pop", src: "pop.mp3" },
        { id: 5, name: "Hip-hop", src: "hip-hop.mp3" },
        { id: 6, name: "Classical", src: "classical.mp3" }
      ]
    },

    videoPage: {
      videoBtnData: [
        { id: 1, name: "All" },
        { id: 2, name: "Favorites" },
        { id: 3, name: "For You" },
        { id: 4, name: "Podcasts" },
        { id: 5, name: "Shorts"},
        { id: 6, name: "Viewed"},
        { id: 7, name: "Music" },
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


  dispatch(action) {
    this._state.postsPage = postsReducer(this._state.postsPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);

  }
}

window.store = store;

export default store;