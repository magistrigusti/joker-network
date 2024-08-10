import React from 'react';
import style from './NavLink.module.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className={style.item}>
      <NavLink className={({ isActive }) => 
        isActive ? `${style.active}` : ''
      } 
        to={props.to} 
      >
        {props.name}
      </NavLink>
    </div>
  )
}

export default Nav;