import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Dialogs.module.css';
import { updateNewMessageBody, sendMessage } from '../../redux/dialogs-reducer';
import DialogItem from "./DialogItem/DialogItem";
import Messages from './Messages/Messages';

const Dialogs = () => {
  const state = useSelector(state => state.dialogsPage);
  const dispatch = useDispatch();

  const messagesElements = state.messagesData.map(message => (
    <Messages key={message.id} message={message.message} />
  ));
  const dialogsElements = state.usersData.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));
  const newMessageBody = state.newMessageBody;

  const handleMessageClick = () => {
    dispatch(sendMessage());
  };

  const handleNewMessageChange = (event) => {
    dispatch(updateNewMessageBody(event.target.value));
  };

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
            <textarea
              className={style.imput_message}
              value={newMessageBody}
              onChange={handleNewMessageChange}
              placeholder="Write your message"
            />
          </div>
          <div>
            <button className={style.send_message} onClick={handleMessageClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
