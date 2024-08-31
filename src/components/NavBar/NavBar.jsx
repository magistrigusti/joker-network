import React, { useState } from 'react';
import style from './NavBar.module.css';
import Nav from './NavLink/NavLink';
import { FaBars } from "react-icons/fa";

const NavBar = ({ state }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`${style.nav} ${isCollapsed ? style.collapsed : ''}`}>
      <button className={style.toggleButton} onClick={toggleSidebar}>
        <FaBars className={style.toggle_btn} />
      </button>
      {state.sidebarData.map(sidebar => (
        <Nav 
          key={sidebar.id} 
          to={sidebar.to} 
          name={sidebar.name} 
          icon={sidebar.icon} 
          isCollapsed={isCollapsed} 
        />
      ))}
    </nav>
  );
};

export default NavBar;

