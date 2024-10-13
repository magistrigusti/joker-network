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
    addPostTextActionCreator(state) {
      const newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likeCount: 0,
      };

      // Добавление нового поста в состояние
      state.postsData.push(newPost);
      state.newPostText = ''; // Очистка поля ввода
    },
    updateNewPostTextActionCreator(state, action) {
      // Обновление текста нового поста
      state.newPostText = action.payload;
    },
  },
});

export const { addPostTextActionCreator, updateNewPostTextActionCreator } = postsSlice.actions;
export default postsSlice.reducer;




