import React from 'react';
import style from './NavBar.module.css';
import Nav from './NavLink/NavLink';


const NavBar = ({state}) => {
  let sidebarElements = state.sidebarData.map(
    sidebar => <Nav to={sidebar.to} name={sidebar.name} />
  );

  return (
    <nav className={style.nav}>
      {sidebarElements}
    </nav>
  )
}

export default NavBar;