// ProfileContainer.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './Profile';

const ProfileContainer = () => {
  const profileState = useSelector(state => state.profilePage.profile);

  return (
    <div>
      <Profile profileState={profileState} />
    </div>
  );
};

export default ProfileContainer;
