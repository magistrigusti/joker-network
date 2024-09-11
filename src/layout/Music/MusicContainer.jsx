import React from 'react';
import { useSelector } from 'react-redux';
import Music from './Music';

const MusicContainer = () => {
  const musicState = useSelector(state => state.musicPage)
  return (
    <Music state={musicState} />
  )
};

export default MusicContainer;