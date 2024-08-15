import React from 'react';
import style from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return (
    <div className={style.dialog}>
      <NavLink to={path}>
        <img className={style.avatar} src={props.avatar} alt="" />
        <div className={style.user_name}>{props.name}</div>
      </NavLink>
    </div>
  )
}

export default DialogItem;