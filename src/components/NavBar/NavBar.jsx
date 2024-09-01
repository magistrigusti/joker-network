import React, { useState, useEffect } from 'react';
import style from './NavBar.module.css';
import Nav from './NavLink/NavLink';

const NavBar = ({ state }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`${style.nav} ${isMobile ? style.collapsed : style.expanded}`}>
      {state.sidebarData.map(sidebar => (
        <Nav 
          key={sidebar.id} 
          to={sidebar.to} 
          icon={sidebar.icon}
          name={sidebar.name} 
          isCollapsed={isMobile} // Иконки на мобильных, имена на веб
        />
      ))}
    </nav>
  );
};

export default NavBar;
