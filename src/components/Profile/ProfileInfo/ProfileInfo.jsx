import React from 'react';
import style from './ProfileInfo.module.css';
import avatar from '../../../img/avatar.png';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={style.avatar} src={avatar} alt="Avatar" />
      </div>
      <div>
        <h4 className={style.name}>Knyazhe</h4>
        <p className={style.years}>38 years old</p>
        <div className={style.status_wrapper}>
          <span>Status: </span>
          <span className={style.status}>I'm a joker</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;