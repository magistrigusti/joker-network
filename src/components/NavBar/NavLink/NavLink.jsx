import React from 'react';
import style from './NavLink.module.css';
import { NavLink } from 'react-router-dom';



const Nav = (props) => {
  return (
    <div className={style.item}>
      <div className={`${style.sidebar} ${props.isCollapsed ? style.collapsed : ''}`}>
      <NavLink className={({ isActive }) => isActive ? `${style.active}` : ''} 
        key={props.id}
        to={props.to} >
          <span className={style.icon}>{props.icon}</span>
          {!props.isCollapsed && props.name}
      </NavLink>
      </div>
    </div>
  )
}

export default Nav;