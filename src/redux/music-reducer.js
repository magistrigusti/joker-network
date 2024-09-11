import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    playlists: [
      { id: 1, nameStyle: "Pop", songs: [
        { id: 1, name: "Song 1", artist: "DDT" },
        { id: 2, name: "Song 2", artist: "Alisa" },
      ]},
      { id: 2, nameStyle: "Rock", songs: [
        { id: 3, name: "Song 3", artist: "Kino" },
        { id: 4, name: "Song 4", artist: "Aria" },
      ]},
    ],
    musicBtnData: [
      {id: 1, name: 'Favorite'},
      {id: 2, name: 'All'},
      {id: 3, name: 'Pop'},
      {id: 4, name: 'Rock'},
      {id: 5, name: 'Hip-Hop'},
    ],
    currentPlaylist: null,
  },
  reducers: {
    setCurrentPlaylist(state, action) {
      state.currentPlaylist = action.payload;
    },
  },
});

export const { setCurrentPlaylist } = musicSlice.actions;
export default musicSlice.reducer;
