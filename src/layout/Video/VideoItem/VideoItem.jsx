import React from 'react';
import style from './VideoItem.module.css';

const VideoItem = (props) => {
  return (
    <div className={style.video_item}>
      <h3 className={style.name}>{props.name}</h3>
      <div className={style.atribute}>
      <p>{props.director}</p>
      <p>{props.year}</p>
      </div>
    </div>
  )
};

export default VideoItem; 