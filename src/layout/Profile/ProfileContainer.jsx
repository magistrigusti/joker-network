import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { useParams } from 'react-router-dom';

const ProfileContainer = ({ profile, getUserProfile }) => {
  const { profileId } = useParams(); // Получаем параметр profileId из URL

  useEffect(() => {
    const userId = profileId || 1; // Используем profileId, если он есть, иначе - 1
    getUserProfile(userId); 
  }, [profileId, getUserProfile]); // Зависимости useEffect

  return <Profile profile={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profileData,
});

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
