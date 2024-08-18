import React from 'react';
import style from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
    <div className={style.friend_item}>
      <img className={style.friend_avatar} src={props.avatar} alt="friend avatar img" />
      <div className={style.friend_name}>{props.name}</div>
      <div className={style.friend_status}>{props.status}</div>
      <div className={style.friend_country}>{props.country}</div>
      <div className={style.friend_city}>{props.city}</div>
      
    </div>
  )
}

export default FriendItem;;