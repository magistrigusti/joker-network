import { createSlice } from '@reduxjs/toolkit';
import sahaAvatar from '../img/sahajpg.jpg';
import mashaAvatar from '../img/masha.png';
import radmilaAvatar from '../img/radmila.png';
import annaAvatar from '../img/anna.png';
import yanaAvatar from '../img/yanaavatarjpg.jpg';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    usersData: [
      { id: 1, name: "Saha", avatar: sahaAvatar, country: "Izrael", city: "Holon", status: "online" },
      { id: 2, name: "Masha", avatar: mashaAvatar, country: "Russia", city: "Moscow", status: "ofline" },
      { id: 3, name: "Radmila", avatar: radmilaAvatar, country: "Russia", city: "Electrostal", status: "ofline" },
      { id: 4, name: "Anna", avatar: annaAvatar, country: "Russia", city: "Ivanovo", status: "ofline" },
      { id: 5, name: "Yana", avatar: yanaAvatar, country: "Russua", city: "Mosrow", status: "online" }
    ],
  },
  reducers: {
    addFriend: (state, action) => {
      state.usersData.push(action.payload);
    },
    deleteFriend: (state, action) => {
      let index = state.usersData.findIndex(friend => friend.id === action.payload);
      if (index !== -1) {
        state.usersData.splice(index, 1);
      }
    },
  },
});

export const { addFriend, deleteFriend } = friendsSlice.actions;

export default friendsSlice.reducer;