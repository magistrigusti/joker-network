import React from 'react';
import style from './NavLink.module.css';
import { NavLink } from 'react-router-dom';

const Nav = ({ to, name, icon, isCollapsed }) => {
  return (
    <div className={style.item}>
      <NavLink 
        className={({ isActive }) => isActive ? `${style.active}` : ''} 
        to={to}
      >
        {isCollapsed ? (
          <span className={style.icon}>{icon}</span> // Иконки на мобильных
        ) : (
          <span className={style.name}>{name}</span> // Имена на веб
        )}
      </NavLink>
    </div>
  );
};

export default Nav;
