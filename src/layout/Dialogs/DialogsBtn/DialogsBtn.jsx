import React from 'react';
import style from './DialogsBtn.module.css';

const DialogsBtn = (props) => {
  const handleMessageClick = () => {
    props.sendMessage();
  };
  return (
    <div className={style.button_wrapper}>
      <button className={style.button} onClick={handleMessageClick}>Add Post</button>
    </div>
  )
}

export default DialogsBtn;