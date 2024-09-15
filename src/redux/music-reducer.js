import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
  name: 'music',
  initialState: {
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
