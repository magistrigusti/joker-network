import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from './Messages/Messages';

const Dialogs = (props) => {

  const messagesElements = props.dialogsPage.messagesData.map(message => (
    <Messages key={message.id} message={message.message} />
  ));
  const dialogsElements = props.dialogsPage.usersData.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));
  const newMessageBody = props.dialogsPage.newMessageBody;

  const handleMessageClick = () => {
    props.sendMessage();
  };

  const handleNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={style.dialogs}>
      <h4 className={style.title}>Dialogs</h4>
      <div className={style.dialogs_wrapper}>
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
    </div>
  );
};

export default Dialogs;
