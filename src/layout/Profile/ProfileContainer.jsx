import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  return function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
}

class ProfileContainer extends React.Component {
  
  async componentDidMount() {
    const { profileId } = this.props.router.params;
    const validProfileId = profileId || 1; // Заменяем profileId на 1, если он не задан

    try {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${validProfileId}`);
        this.props.setUserProfile(response.data);
    } catch (error) {
        console.error("Error fetching profile data:", error);
        // Можно добавить обработку состояния ошибки здесь, например:
        // this.setState({ error: "Ошибка загрузки данных профиля." });
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

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));


