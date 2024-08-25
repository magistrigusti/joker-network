const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    this._state.dialogsPage.newMessageBody = action.messageBody;
    this._callSubscriber(this._state);
  } else if (action.type === SEND_MESSAGE) {
    let messageBody = this._state.dialogsPage.newMessageBody;
    this._state.dialogsPage.newMessageBody = '';
    this._state.dialogsPage.messagesData.push({ id: 5, message: messageBody});
    this._callSubscriber(this._state);
  }
  return state;
}