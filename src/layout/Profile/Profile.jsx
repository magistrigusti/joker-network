// Profile.jsx
import React from "react";
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPhotos from './MyPhotos/MyPhotos';

const Profile = (props) => {
  const { profileState } = props;

  let fotoElements = profileState.photosLarge.map(foto => 
    <MyPhotos id={foto.id} foto={foto.name} key={foto.id} />
  );

  return (
    <div className={style.profile_wrapper}>
      <div>
        <ProfileInfo profile={profileState} />
      </div>
      
      <div className={style.wrapper_photo}>
        <div className={style.title_photo}>my foto</div>
        {fotoElements}
      </div>
    </div>
  );
};

export default Profile;


