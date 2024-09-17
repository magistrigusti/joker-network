import React from 'react';
import style from './FriendItem.module.css';
import { FaPersonCircleXmark } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

const FriendItem = (props) => {
  return (
    <div className={style.friend_item}>
      <img className={style.friend_avatar} src={props.avatar} alt="friend avatar img" />
      <div className={style.friend_name}>{props.name}</div>
      <div className={style.friend}>
        <div className={style.friend_country}>{props.country}</div>
        <div className={style.friend_city}>{props.city}</div>
      </div>
      <div className={style.friend_status}>{props.status}</div>
      <div>
        <FaMessage className={style.icon} />
        <FaPersonCircleXmark className={style.icon} />
      </div>
    </div>
  )
}

export default FriendItem;;