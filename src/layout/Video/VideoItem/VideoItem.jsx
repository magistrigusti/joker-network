import React from 'react';
import style from './VideoItem.module.css';

const VideoItem = (props) => {
  return (
    <div className={style.video_item}>
      <h3>{props.name}</h3>
      <p>{props.director}</p>
      <p>{props.year}</p>
    </div>
  )
};

export default VideoItem;