import React from 'react';
import style from './NavBar.module.css';
import Nav from './NavLink/NavLink';


const NavBar = () => {
  return (
    <nav className={style.nav}>
      <Nav to="/profile" name="Profile" />
      <Nav to="/posts" name="Posts" />
      <Nav to="/friends" name="Friends" />
      <Nav to="/dialogs" name="Dialogs" />
      <Nav to="/music" name="Music" />
      <Nav to="/news" name="News" />
      <Nav to="/video" name="Video" />
      <Nav to="/settings" name="Settings" />
    </nav>
  )
}

export default NavBar;