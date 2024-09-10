import React from 'react';
import Dialogs from './Dialogs';
import {  useDispatch, useSelector } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';


const DialogsContainer = (props) => {
  const dialogsState = useSelector(state => state.dialogsPage);
  const dispatch = useDispatch();

  const handleMessageClick = () => {
    dispatch(sendMessageCreator());
  };

  const handleNewMessageChange = (body) => {
    dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div>
      <Dialogs dialogsPage={dialogsState}
        updateNewMessageBody={handleNewMessageChange}
        sendMessage={handleMessageClick}
      />
    </div>
  )
};

export default DialogsContainer;