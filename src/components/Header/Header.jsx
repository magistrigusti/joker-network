import React from "react";
import logo from "../../img/logo.png";
import style from './Header.module.css';
import Nav from '../NavBar/NavLink/NavLink';
import { TonConnectButton } from "@tonconnect/ui-react";

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
            isCollapsed={true} /* Показываем только иконки на веб-версии */
          />
        ))}
      </div>
      <TonConnectButton style={{marginRight: "25px"}} /> {/* Кнопка подключения к Тону */}
    </header>
  );
};

export default Header;
