import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  async componentDidMount() {
    try {
      const response = await axios.get("https://social-network.samuraijs.com/api/1.0/profile/2");
      this.props.setUserProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  }

  render() {
    if (!this.props.profile) {
      return <div>Loading...</div>; // Показываем "Loading..." до загрузки данных
    }
  
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profileData, // Исправлено на profileData
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);



