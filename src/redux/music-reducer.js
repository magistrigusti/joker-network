import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    playlists: [
      { 
        id: 1, 
        name: 'Hup-Hop Hits', 
        author: 'Eminem', 
        url: "./src/audio/Eminem.jpg",
        songs: [
          { id: 1, name: 'Lose_Yourself', artist: 'Eminem', fileUrl: './src/audio/Eminem-Lose_Yourself.mp3' },
          { id: 2, name: 'Song 2', artist: 'Artist 2' }
        ] 
      },
      { 
        id: 2, 
        name: 'Rap God', 
        author: '50 Cent', 
        url: 'https://example.com/song2.mp3',
        songs: [
          { id: 3, name: 'Candy Shop', artist: '50 Cent', fileUrl: "src/audio/fiftin Cent - Candy Shop (Feat. Olivia).mp3"},
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

