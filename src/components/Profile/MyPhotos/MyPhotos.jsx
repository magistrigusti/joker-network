import React from 'react';
import style from './MyPhotos.module.css';

const MyPhotos = (props) => {
  return (
    <div className={style.my_fotos}>
      <img key={props.id} src={props.foto} alt="" />
    </div>
  );
}

export default MyPhotos;
