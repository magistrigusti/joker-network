const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.messageBody;
      return state;
    case SEND_MESSAGE:
      let messageBody = state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({ id: 5, message: messageBody });
      return state;
    default:
      return state;
  }

};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_BODY, messageBody: message });

export default dialogsReducer;