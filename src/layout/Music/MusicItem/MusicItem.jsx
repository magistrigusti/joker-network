import React from 'react';
import style from './MusicItem.module.css';

const SongsItem = (props) => {
  return (
    <div>
      <h4 className={style.name}>{props.name}</h4>
      <div className={style.atribute}>
        <p>Artist: {props.artist}</p>
      </div>
    </div>
  );
};

const MusicItem = (props) => {
  // Проверяем, есть ли песни, перед вызовом map
  let musicSongsElements = props.songs ? props.songs.map(
    song => <SongsItem key={song.id} name={song.name} artist={song.artist} />
  ) : <p>No songs available</p>; // Отобразим сообщение, если песен нет

  let playerElement = document.createElement('audio');
  playerElement.src = inputTrackForRendering.fileUrl;
  playerElement.controls = true;
  track1Element.append(playerElement);

  return (
    <div className={style.music_item}>
      <div>{props.name}</div>
      {musicSongsElements}
    </div>
  );
};

export default MusicItem;
