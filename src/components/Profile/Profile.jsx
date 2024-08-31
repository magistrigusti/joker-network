import React from "react";
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPhotos from './MyPhotos/MyPhotos';
import { useSelector } from 'react-redux';



const Profile = (props) => {
  const profile = useSelector(state => state.profilePage.profile);

  let fotoElements = props.profile.photosLarge.map(foto => 
    <MyPhotos id={foto.id} foto={foto.name} 
    />
  );

  

  return (
    <div className={style.profile_wrapper}>
      <div>
        <ProfileInfo profile={profile} />
      </div>
      
      <div className={style.wrapper_photo}>
        <div className={style.title_photo}>my foto</div>
        {fotoElements}
      </div>
    </div>
  )
}

export default Profile;