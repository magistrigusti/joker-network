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
  let musicSongsElements = props.songs.map(
    song => <SongsItem key={song.id} name={song.name} artist={song.artist} />
  );

  return (
    <div className={style.music_item}>
      <div>{props.name}</div>
      {musicSongsElements}
    </div>
  );
};

export default MusicItem;
