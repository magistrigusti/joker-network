import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div className={style.profileInfo_wrapper}>
      <div>
        <img className={style.avatar} src={props.profile.photos.avatar} alt="Avatar" />
        <h5 className={style.name}>{props.profile.fullName}</h5>
        <div className={style.years}>
          <p>Years Old:  </p>
          <span>{props.profile.yearsOld}</span>
        </div>
      </div>

      <div className={style.about_wrapper}>
        <div className={style.about_item}>
          <span>About Me: </span>
          <div className={style.about}>{props.profile.aboutMe}</div>
        </div>
        <div className={style.status_item}>
          <span>Status: </span>
          <br />
          <span className={style.status}>{props.profile.userStatus}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;