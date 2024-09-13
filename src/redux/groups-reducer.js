import { createSlice } from '@reduxjs/toolkit';
import bill from '../img/bill.jpg';
import fagundes from '../img/fogundes.png';
import kamasutra from '../img/kamasutra.png';
import joker from '../img/joker.png';
import venera from '../img/venera.jpg';


const groupsSlice = createSlice({
  name: 'friends',
  initialState: {
    groupsData: [
      { id: 1, name: "Fuck you Bill Geits", subscribers: '8000000000', avatar: bill },
      { id: 2, name: "Joker", subscribers: "899563", avatar: joker },
      { id: 3, name: "Fagundes", subscribers: '2000', avatar: fagundes },
      { id: 4, name: "Venera", subscribers: '3000000', avatar: venera },
      { id: 5, name: "it-kamasutra", subscribers: '23456789', avatar: kamasutra },
      
      
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