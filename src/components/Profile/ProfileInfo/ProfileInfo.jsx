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
        <p>38 year old</p>
      </div>
    </div>
  )
}

export default ProfileInfo;