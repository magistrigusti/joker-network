import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    playlists: [
      { 
        id: 1, 
        name: 'Playlist 1', 
        author: 'Artist 1', 
        url: 'https://example.com/song1.mp3',
        songs: [
          { id: 1, name: 'Song 1', artist: 'Artist 1' },
          { id: 2, name: 'Song 2', artist: 'Artist 2' }
        ] 
      },
      { 
        id: 2, 
        name: 'Playlist 2', 
        author: 'Artist 2', 
        url: 'https://example.com/song2.mp3',
        songs: [
          { id: 3, name: 'Song 3', artist: 'Artist 3' },
          { id: 4, name: 'Song 4', artist: 'Artist 4' }
        ] 
      },
    ],
    musicBtnData: [
      { id: 1, name: "Favorite" },
      { id: 2, name: "All" },
      { id: 3, name: 'Pop' },
      { id: 4, name: 'Rock' },
      { id: 5, name: 'Hip-Hop' },
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

