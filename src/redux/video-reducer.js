import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videoData: [
      { id: 1, name: "Star Wars: The Rise of Skywalker", year: 2019, genre: "Action", director: "George Lucas" },
      { id: 2, name: "Inception", year: 2010, genre: "Action", director: "Christopher Nolan" },
      { id: 3, name: "The Matrix", year: 1999, genre: "Sci-Fi", director: "The Wachowski Brothers" }
    ],
    videoBtnData: [
      {id: 1, name: "favorite"},
      {id: 2, name: "All"},
      {id: 3, name: 'Short'},
      {id: 4, name: 'Long'},
      {id: 5, name: 'Action'},
      {id: 6, name: 'Sci-Fi'},
      {id: 7, name: 'Adventure'},
      {id: 8, name: 'Comedy'},
    ],
    currentVideo: null,
  },
  reducers: {
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
    addVideo: (state, action) => {
      state.videoData.push(action.payload);
    },
  },
});

export const { setCurrentVideo, addVideo} = videoSlice.actions;
export default videoSlice.reducer;