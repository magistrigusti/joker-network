import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import logo from "../../img/logo.png";
import style from './Header.module.css';
import Nav from '../NavBar/NavLink/NavLink';


const Header = ({ state, icons, isMobile }) => {
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
      <TonConnectButton style={{ marginRight: "25px" }} /> {/* Кнопка подключения к Тону */}
    </header>
  );
};

export default Header;

