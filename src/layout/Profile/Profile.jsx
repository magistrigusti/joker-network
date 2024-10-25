import React from "react";
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPhotos from './MyPhotos/MyPhotos';

const Profile = (props) => {
  const { profile } = props;

  let fotoElements = profile.photosLarge.map(foto => 
    <MyPhotos id={foto.id} foto={foto.name} key={foto.id} />
  );

  return (
    <div className={style.profile_wrapper}>
      <h3 className={style.title}>Profile</h3>
      <div>
        <ProfileInfo profile={profile} />
      </div>
      
      <div className={style.wrapper_photo}>
        <div className={style.title_photo}>My Photo</div>
        {fotoElements}
      </div>
    </div>
  );
};

export default Profile;



