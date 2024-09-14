import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },

  reducers: {
    setNews: (state,action) => {
      state.items = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action ) => {
      state.error = action.payload;
    },
  },
});

export const { setNews, setStatus, setError } = newsSlice.actions;
export default newsSlice.reducer;