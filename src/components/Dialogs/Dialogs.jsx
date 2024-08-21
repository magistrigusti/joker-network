import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
// import { Routes, Route } from 'react-router-dom';
import Messages from './Messages/Messages';


const Dialogs = ({ state }) => {

  let messagesElements = state.messagesData.map(message => <Messages message={message.message} />);
  let dialogsElements = state.usersData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_item}>
        {dialogsElements}
      </div>


      

      <div className={style.messages}>
        {messagesElements}

        <div className={style.new_message_wrapper}>
          <textarea className={style.imput_message}
            placeholder="write your message"
          ></textarea>
          <button className={style.send_message}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs; 