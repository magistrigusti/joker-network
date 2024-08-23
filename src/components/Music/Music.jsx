import React from 'react';
import style from './Music.module.css';
import MusicButton from './MusicButton/MusicButton';

const Music = ({state}) => {
  let musicBtnElements = state.musicBtnData.map(btn => <MusicButton name={btn.name} />)

  return (
    <div className={style.music_wrapper}>
      <div className={style.music_btn}>
        {musicBtnElements}
      </div>
      Music
    </div>
  );
}

export default Music;