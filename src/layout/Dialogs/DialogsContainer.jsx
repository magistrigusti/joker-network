import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';


// const DialogsContainer = (props) => {
//   const dialogsState = useSelector(state => state.dialogsPage);
//   const dispatch = useDispatch();

//   const handleMessageClick = () => {
//     dispatch(sendMessageCreator());
//   };

//   const handleNewMessageChange = (body) => {
//     dispatch(updateNewMessageBodyCreator(body));
//   };

//   return (
//     <div>
//       <Dialogs dialogsPage={dialogsState}
//         updateNewMessageBody={handleNewMessageChange}
//         sendMessage={handleMessageClick}
//       />
//     </div>
//   )
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}

const DialgsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialgsContainer;