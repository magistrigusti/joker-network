import React from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={style.nav}>
        <div className={`${style.item} ${style.active}`}>
          <a>Profile</a>
        </div>
        <div className={style.item}>
          <a>Message</a>
        </div>
        <div className={style.item}>
          <a>NavBar</a>
        </div>
        <div className={style.item}>
          <a>Music</a>
        </div>
        <div className={`${style.item} ${style.item_last}`}>
          <a>Settings</a>
        </div>
      </nav>
  )
}

export default NavBar;