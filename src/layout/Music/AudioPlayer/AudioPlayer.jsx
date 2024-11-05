import React, { useRef } from 'react';

function AudioPlayer(props) {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <audio ref={audioRef} src={props.fileUrl} controls />  {/* Добавлен атрибут controls */}
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
}

export default AudioPlayer;
