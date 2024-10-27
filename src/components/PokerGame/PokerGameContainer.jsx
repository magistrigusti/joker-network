import { connect } from 'react-redux';
import PokerTable from './PokerTable/PokerTable';

const mapStateToProps = (state) => {
  return {
    pokerPage: state.pokerPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Определите свои действия dispatch здесь, если это необходимо
  };
};

const PokerGameContainer = connect(mapStateToProps, mapDispatchToProps)(PokerTable);

export default PokerGameContainer;

