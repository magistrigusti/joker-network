import React, { useState, useEffect } from 'react';
import { useTheme } from '../../Context/ThemeContext';
import style from './NavBar.module.css';
import Nav from './NavLink/NavLink';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const NavBar = ({ state, icons }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`${style.nav} ${isMobile ? style.collapsed : style.expanded}`}>
      <div>
        <button className={style.toggle_theme} onClick={toggleTheme}>
          {isDarkMode ? <MdLightMode /> : <MdDarkMode /> }
        </button>
      </div>

      {state.sidebarData.map((sidebar) => {
        const IconComponent = icons[sidebar.iconName];
        return (
          <Nav
            className={style.item}
            key={sidebar.id}
            to={sidebar.to}
            icon={<IconComponent />} // передаем компонент иконки
            name={sidebar.name}
            isCollapsed={isMobile}
          />
        );
      })}
    </nav>
  );
};

export default NavBar;
