import React from "react";
import style from './Profile.module.css';
import avatar from '../../img/avatar.png';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={style.background_container}>
      <div className={style.text_overlay}>
        <div>
          <img className={style.avatar} src={avatar} alt="Avatar" />
          <h4 className={style.name}>Knyazhe</h4>
        </div>
        <MyPosts />
      </div>
    </div>
  )
}

export default Profile;