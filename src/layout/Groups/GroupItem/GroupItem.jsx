import React from 'react';
import style from './GroupItem.module.css';
import { MdDeleteForever } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";

const GroupItem = (props) => {
  return (
    <div className={style.group_item}>
      <div className={style.items_group}>
        <img className={style.group_avatar} src={props.avatar} alt="group avatar img" />
        <div className={style.group_name}>{props.name}</div>
      </div>
      <div className={style.items}>
        <p>subscribers: </p>
        <div className={style.subscribers}>{props.subscribers}</div>
      </div>
      <div className={style.items}>
        <FaMessage className={style.icon} />
        <MdDeleteForever className={style.icon} />
      </div>
    </div>
  )
}

export default GroupItem;