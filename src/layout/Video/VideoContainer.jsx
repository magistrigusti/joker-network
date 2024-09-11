import React from 'react';
import { useSelector } from 'react-redux';
import Video from './Video';

const VideoContainer = () => {
  const videoState = useSelector(state => state.videoPage);
  return (
    <Video state={videoState} />
  )
};

export default VideoContainer;