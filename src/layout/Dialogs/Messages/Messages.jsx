import React from 'react';
import style from "./Messages.module.css";

const Messages = ({ message, user }) => {
  return (
    <div className={`${style.messageWrapper} ${user === 'joker' ? style.jokerWrapper : style.userWrapper}`}>
      <span className={user === 'joker' ? style.joker : style.msg}>
         {message}
      </span>
    </div> 
  );
}

export default Messages;
