import React from "react";
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPhotos from './MyPhotos/MyPhotos';



const Profile = (props) => {
  let fotoElements = props.profile.photosLarge.map(foto => 
    <MyPhotos id={foto.id} foto={foto.name} 
    />
  );

  

  return (
    <div className={style.profile_wrapper}>
      <ProfileInfo profile={props.profile} />
      <div>
        <div>my foto</div>
        {fotoElements}
      </div>
    </div>
  )
}

export default Profile;