import React from 'react';
import style from './VideoBtn.module.css';

const VideoBtn = (props) => {
  return (
    <div className={style.video_button_wrapper}>
      <button className={style.video_button}>{props.name}</button>
    </div>
  )
}

export default VideoBtn;