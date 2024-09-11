import React from 'react';
import style from './MusicButton.module.css';

const MusicButton = (props) => {
  return (
    <div className={style.music_button_wrapper}>
      <button className={style.music_button}>{props.name}</button>
    </div>
  )
}

export default MusicButton;