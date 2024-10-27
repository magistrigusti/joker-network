// HeaderContainer.jsx
import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaDiagramNext } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { MdGroupAdd } from "react-icons/md";
import { GiPokerHand } from "react-icons/gi";
import { GrLogin } from "react-icons/gr";
import { setAuthUserData } from '../../redux/auth-reducer';

const icons = {
  FaHome, FaMessage, FaDiagramNext, FaPeopleGroup, FaNewspaper, FaMusic,
  FaVideo, FaGear, MdGroups3, PiPersonArmsSpreadFill, MdGroupAdd, 
  GiPokerHand, GrLogin
};

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      { withCredentials: true }
    )
      .then(response => {
        if (response.data.resultCode === 0 ) {
          const { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, email, true, login); // Передаём isAuth=true, и login
        }
      });
  }

  render() {
    return (
      <Header {...this.props} icons={icons} />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth?.isAuth,
  login: state.auth?.login,
});

const mapDispatchToProps = {
  setAuthUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
