// ProfileContainer.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './Profile';

const ProfileContainer = (props) => {
  const profileState = useSelector(state => state.profilePage.profile);
  console.log('Profile State:', profileState); // Добавь этот лог

  return (
    <div>
      <Profile profileState={profileState} />
    </div>
  );
};

export default ProfileContainer;
