import React from 'react';
import style from "./Messages.module.css";

const Messages = (props) => {

  return (
    <div className={style.messages}>
        {props.message}
      </div> 
  )
}

export default Messages; 