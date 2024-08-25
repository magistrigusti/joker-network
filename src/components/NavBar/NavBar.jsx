import React, { useState } from 'react';
import style from './NavBar.module.css';
import Nav from './NavLink/NavLink';
import { FaBurger } from "react-icons/fa6";


const NavBar = ({state}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  let sidebarElements = state.sidebarData.map(
    (sidebar) => <Nav key={sidebar.id} to={sidebar.to} name={sidebar.name} icon={sidebar.icon} isCollapsed={isCollapsed} />
  );

  return (
    <nav className={style.nav}>
      <div >
        <button className={style.toggleButton}
          onClick={toggleSidebar}>
            <FaBurger className={style.toggle_btn} />
          </button>
          {sidebarElements}
      </div>
    </nav>
  )
}

export default NavBar;