import { createSlice } from '@reduxjs/toolkit';
import bill from '../img/avatars/bill.jpg';
import fagundes from '../img/avatars/fogundes.png';
import kamasutra from '../img/avatars/kamasutra.png';
import joker from '../img/avatars/joker.png';
import venera from '../img/avatars/venera.jpg';


const groupsSlice = createSlice({
  name: 'friends',
  initialState: {
    groupsData: [
      { id: 1, name: "Fuck You Bill", description: "Fuck you Bill Gates", subscribers: '8000000000', avatar: bill },
      { id: 2, name: "Joker", description: "Official Joker ecosystem group", subscribers: "899563", avatar: joker },
      { id: 3, name: "Fagundes", description: "Poker club", subscribers: '2000', avatar: fagundes },
      { id: 4, name: "Venera", description: "This group of researchers and creators of the future", subscribers: '3000000', avatar: venera },
      { id: 5, name: "it-kamasutra", description: "Online IT incubator", subscribers: '23456789', avatar: kamasutra },
      
      
    ],
  },
  reducers: {
    addGroup: (state, action) => {
      state.groupsData.push(action.payload);
    },
    deleteGroup: (state, action) => {
      let index = state.groupsData.findIndex(friend => friend.id === action.payload);
      if (index !== -1) {
        state.groupsData.splice(index, 1);
      }
    },
  },
});

export const { addGroup, deleteGrup } = groupsSlice.actions;

export default groupsSlice.reducer;