import React from 'react';
import style from './Video.module.css';
import VideoBtn from './VideoBtn/VideoBtn';
import VideoItem from './VideoItem/VideoItem';

const Video = ({ state }) => {
  let videoBtnElements = state.videoBtnData.map(video => <VideoBtn name={video.name} />);
  let videoItemsElements = state.videoData.map(
    video => <VideoItem id={video.id} name={video.name} director={video.director} year={video.year} />
  );

  return (
    <div className={style.video_wrapper}>
      <h4 className={style.title}>Video</h4>
      <div className={style.video_btn}>
        {videoBtnElements}
      </div>
      
      <div className={style.video_content}>
        {videoItemsElements}
      </div>
    </div>
  )
}

export default Video;