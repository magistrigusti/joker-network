// MusicContainer.js
import React from 'react';
import { useSelector } from 'react-redux';
import Music from './Music';

const MusicContainer = () => {
  const musicState = useSelector(state => state.musicPage); // используем селектор для получения состояния
  return <Music state={musicState} />;
};

export default MusicContainer;
