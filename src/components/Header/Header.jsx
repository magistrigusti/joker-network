import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { NavLink } from 'react-router-dom';
import logo from "../../img/logo.png";
import style from './Header.module.css';
import Nav from '../NavBar/NavLink/NavLink';


const Header = ({ state, icons, isMobile, isAuth, login }) => {
  return (
    <header className={style.header}>
      <div className={style.header_logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={style.header_nav}>
        {state.sidebarData.map((sidebar) => {
          const IconComponent = icons[sidebar.iconName];
          return (
            <Nav
              className={style.item}
              key={sidebar.id}
              to={sidebar.to}
              icon={<IconComponent />} // передаем компонент иконки
              isCollapsed={isMobile}
            />
          );
        })}
      </div>
      
      <div className={style.login_block}>
        {isAuth ? login : <NavLink to={'/login'}>{icons.GrLogin}</NavLink>}
      </div>
      <TonConnectButton style={{ marginRight: "25px" }} /> 
    </header>
  );
};

export default Header;

