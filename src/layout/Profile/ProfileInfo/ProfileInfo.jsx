import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../../components/common/Preloader/Preloader';
import myAvatar from '../../../img/avatars/avatar.png';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={style.profileInfo_wrapper}>
      <div>
        <img 
          className={style.avatar} 
          src={props.profile.photos.large || myAvatar} 
          alt="Avatar" 
        />
        <h5 className={style.name}>{props.profile.fullName}</h5>
        <div className={style.years}>
          <p>Years Old:  </p>
          <span>{props.profile.yearsOld}</span>
        </div>
      </div>

      <div className={style.about_wrapper}>
        <div className={style.about_item}>
          <span className={style.about_me}>About Me: </span>
          <div className={style.about}>{props.profile.aboutMe}</div>
        </div>
        <div className={style.status_item}>
          <span className={style.status_span}>Status: </span>
          <br />
          <span className={style.status}>{props.profile.userStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
