import React from 'react';
import style from './NavBar.module.css';
import Nav from './NavLink/NavLink';


const NavBar = () => {
  return (
    <nav className={style.nav}>
      <Nav to="profile" name="Profile" />
      <Nav to="dialogs" name="Messages" />
      <Nav to="/music" name="Music" />
      <Nav to="/news" name="News" />
      <Nav to="/video" name="Video" />
      <Nav to="/settings" name="Settings" />
    </nav>
  )
}

export default NavBar;