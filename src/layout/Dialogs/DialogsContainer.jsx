
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { updateNewMessageBody, sendMessage } from '../../redux/dialogs-reducer';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageBody: state.dialogsPage.newMessageBody,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessage()); // Отправляем сообщение без аргументов
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBody(body)); // Обновляем текст
    },
  }
}

const DialgsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialgsContainer;