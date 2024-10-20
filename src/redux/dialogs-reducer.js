import { createSlice } from '@reduxjs/toolkit';
import sahaAvatar from '../img/avatars/sahajpg.jpg';
import mashaAvatar from '../img/avatars/masha.png';
import radmilaAvatar from '../img/avatars/radmila.png';
import annaAvatar from '../img/avatars/anna.png';
import yanaAvatar from '../img/avatars/yanaavatarjpg.jpg';

const dialogsSlice = createSlice({
  
  name: 'dialogs',
  initialState: {
    usersData: [
      { id: 1, name: "Saha", avatar: sahaAvatar, country: "Izrael", city: "Holon", status: "online" },
      { id: 2, name: "Masha", avatar: mashaAvatar, country: "Russia", city: "Moscow", status: "offline" },
      { id: 3, name: "Radmila", avatar: radmilaAvatar, country: "Russia", city: "Electrostal", status: "offline" },
      { id: 4, name: "Anna", avatar: annaAvatar, country: "Russia", city: "Ivanovo", status: "offline" },
      { id: 5, name: "Yana", avatar: yanaAvatar, country: "Russua", city: "Mosrow", status: "online" }
    ],
    messagesData: [
      { id: 1, user: 'joker', message: "Hello Saha" },
      { id: 2, user: 'joker', message: "How are you feel" },
      { id: 3, user: 'saha', message: "I'm fine, thank you" },
      { id: 4, user: 'saha', message: "But I'm busy now" }
    ],
    newMessageBody: '',
  },
  
  reducers: {
    
    sendMessage(state) {
      const newMessage = { 
        id: state.messagesData.length + 1, 
        message: state.newMessageBody 
      };
      state.messagesData.push(newMessage);
      state.newMessageBody = '';
    },
    updateNewMessageBody(state, action) {
      state.newMessageBody = action.payload;
    },
  },
});



export const { updateNewMessageBody, sendMessage} = dialogsSlice.actions;
export default dialogsSlice.reducer;
