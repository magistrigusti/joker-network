import React from 'react';
import style from './MusicItem.module.css';

const SongsItem = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>Artist: {props.artist}</p>
    </div>
  )
}

const MusicItem = (props) => {
  let musicSongsElements = props.songs.map(
    song =><SongsItem id={song.id} name={song.name} artist={song.artist} />
  );

  return (
    <div className={style.music_item}>
      
      <div>{props.name}</div>
      {musicSongsElements}
    </div>
  );
};

export default MusicItem;