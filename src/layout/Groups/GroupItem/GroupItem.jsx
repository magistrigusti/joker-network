import React from 'react';
import style from './GroupItem.module.css';
import { MdDeleteForever } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";

const GroupItem = (props) => {
  return (
    <div className={style.group_item}>
      <div className={style.avatar_wrapper}>
          <img className={style.group_avatar} src={props.avatar} alt="group avatar img" />
        </div>

      <div className={style.group_wrapper}>
        <div className={style.group_name}>{props.name}</div>
        <div className={style.description}>{props.description}</div>
      </div>

      <div className={style.wrapper_subscribers}>
        <div>subscribers: </div>
        <div className={style.subscribers}>{props.subscribers}</div>
      </div>

      <div className={style.items}>
        <FaMessage className={style.icon_message} />
        <MdDeleteForever className={style.icon} />
      </div>
    </div>
  )
}

export default GroupItem;