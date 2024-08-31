import React from "react";
import logo from "../../img/logo.png";
import style from './Header.module.css';
import Nav from '../NavBar/NavLink/NavLink';

const Header = ({ state }) => {
  return (
    <header className={style.header}>
      <div className={style.header_logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.header_nav}>
        {state.sidebarData.map(sidebar => (
          <Nav 
            key={sidebar.id} 
            to={sidebar.to} 
            icon={sidebar.icon} 
            isCollapsed={true} // В шапке отображаем только иконки
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
