import React from 'react';
import style from './Dialogs.module.css';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';
import DialogItem from "./DialogItem/DialogItem";
// import { Routes, Route } from 'react-router-dom';
import Messages from './Messages/Messages';


const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let messagesElements = state.messagesData.map(message => <Messages message={message.message} />);
  let dialogsElements = state.usersData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
  let newMessageBody = state.newMessageBody;

  let onMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMesssageChange = (event) => {
    let message = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(message))
  }

  return (
    <div className={style.dialogs}>

      <div className={style.dialogs_item}>
        {dialogsElements}
      </div>

      <div className={style.messages}>
        <div>
          {messagesElements}
        </div>

        <div className={style.new_message_wrapper}>
          <div>
            <textarea className={style.imput_message}
              value={ newMessageBody }
              onChange={ onNewMesssageChange }
              placeholder="write your message">
            </textarea>
          </div>

          <div>
            <button className={style.send_message}
              onClick={ onMessageClick }
            >Send</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dialogs; 