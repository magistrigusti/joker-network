import { createSlice } from '@reduxjs/toolkit';
import sahaAvatar from '../img/sahajpg.jpg';
import mashaAvatar from '../img/masha.png';
import radmilaAvatar from '../img/radmila.png';
import annaAvatar from '../img/anna.png';

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState: {
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
  reducers: {
    updateNewMessageBodyCreator(state, action) {
      state.newMessageBody = action.payload;
    },
    sendMessageCreator(state) {
      const newMessage = { id: state.messagesData.length + 1, message: state.newMessageBody };
      state.messagesData.push(newMessage);
      state.newMessageBody = '';
    },
  },
});

export const { updateNewMessageBodyCreator, sendMessageCreator } = dialogsSlice.actions;
export default dialogsSlice.reducer;
