import React from 'react';
import style from './Video.module.css';
import VideoBtn from './VideoBtn/VideoBtn';

const Video = ({ state }) => {
  let videoBtnElements = state.videoBtnData.map(video => <VideoBtn name={video.name} />);

  return (
    <div className={style.video_wrapper}>
      <div className={style.video_btn}>
        {videoBtnElements}
      </div>
      Videos
    </div>
  )
}

export default Video;