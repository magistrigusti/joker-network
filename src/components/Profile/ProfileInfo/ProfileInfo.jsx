import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={style.avatar} src={props.profile.photos.avatar} alt="Avatar" />
      </div>
      <div>
        <h4 className={style.name}>{props.profile.fullName}</h4>
        <div className={style.years}>
          <p>Years Old:  </p>
          {props.profile.yearsOld}
        </div>
        <div className={style.about_wrapper}>
          <span>About Me: </span>
          <div className={style.about}>{props.profile.aboutMe}</div>
        </div>
        <div className={style.status_wrapper}>
          <span>Status: </span>
          <span className={style.status}>{props.profile.userStatus}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;