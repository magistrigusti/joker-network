import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from '../../api/api';

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
    const userId = profileId || 1; // Заменяем profileId на 1, если он не задан
    usersAPI.getProfile(userId).then(response => {
      this.props.setUserProfile(response.data);
    });
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


