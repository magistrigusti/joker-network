import React from 'react';
import style from './Music.module.css';
import MusicButton from './MusicButton/MusicButton';
import MusicItem from './MusicItem/MusicItem';

const Music = ({state}) => {
  let musicBtnElements = state.musicBtnData.map(btn => <MusicButton name={btn.name} />);
  let musicItemElements = state.playlists.map(
    music => <MusicItem id={music.id} nameStyle={music.nameStyle} songs={music.songs} /> 
  );

  return (
    <div className={style.music_wrapper}>
      <h4 className={style.title}>Music</h4>
      <div className={style.music_btn}>
        {musicBtnElements}
      </div>

      <div className={style.music_item}>
        {musicItemElements}
      </div>
    </div>
  );
}

export default Music;