import React from 'react';
import style from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
    <div className={style.friend_item}>
      <img className={style.friend_avatar} src={props.avatar} alt="friend avatar img" />
      <div>{props.name}</div>
      <div>{props.country}</div>
      <div>{props.city}</div>
      <div>{props.status}</div>
    </div>
  )
}

export default FriendItem;;