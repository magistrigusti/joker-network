import React from 'react';
import style from './MusicItem.module.css';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const MusicItem = (props) => {
  let musicSongsElements = props.songs ? props.songs.map(
    song => <AudioPlayer key={song.id} name={song.name} fileUrl={song.fileUrl} artist={song.artist} />
  ) : <p>No songs available</p>;

  return (
    <div className={style.music_item}>
      <div>{props.name}</div>
      {musicSongsElements}
    </div>
  );
};

export default MusicItem;
