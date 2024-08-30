import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    postsData: [
      { id: 1, message: "Hi, my friends.", likeCount: 5 },
      { id: 2, message: "How are you doing?", likeCount: 12 },
      { id: 3, message: "Welcome to my social network", likeCount: 17 }
    ],
    newPostText: 'Joker',
  },
  reducers: {
    addPostText(state) {
      const newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likeCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = '';
    },
    updateNewPostText(state, action) {
      state.newPostText = action.payload;
    },
  },
});

export const { addPostText, updateNewPostText } = postsSlice.actions;
export default postsSlice.reducer;




