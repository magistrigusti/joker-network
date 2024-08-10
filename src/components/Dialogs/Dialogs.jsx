import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return (
    <div className={style.dialog}>
      <NavLink to={path}>
        {props.name}
      </NavLink>
    </div>
  )
}

const Messages = (props) => {
  return (
    <div className={style.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  let usersData = [
    { id: 1, name: "Saha" },
    { id: 2, name: "Masha" },
    { id: 3, name: "Radmila" },
    { id: 4, name: "Anna" }
  ];

  let messagesData = [
    { id: 1, message: "Hello Saha" },
    { id: 2, message: "How are you feel" },
    { id: 3, message: "I'm fine, thank you" },
    { id: 4, message: "But I'm busy now" }
  ];

  let messagesElements = messagesData.map(message => <Messages message={message.message} />); 
  let dialogsElements = usersData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_item}>
        { dialogsElements }
      </div>

      <div className={style.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;