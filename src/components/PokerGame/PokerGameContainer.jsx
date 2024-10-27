
import PokerTable from './PokerTable/PokerTable';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    pokerPage: state.pokerPage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const PokerGameContainer = connect(mapStateToProps, mapDispatchToProps) (PokerTable)
 

export default PokerGameContainer;
