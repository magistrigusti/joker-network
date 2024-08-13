import React from "react";
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={style.profile_wrapper}>
      <ProfileInfo />
    </div>
  )
}

export default Profile;