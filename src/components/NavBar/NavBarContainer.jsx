import React from 'react';
import NavBar from './NavBar';
import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaDiagramNext } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { MdGroupAdd } from "react-icons/md";
import { GiPokerHand } from "react-icons/gi";

const NavBarContainer = ({ state }) => {
  const icons = {
    FaHome, FaMessage, FaDiagramNext, FaPeopleGroup, FaNewspaper, FaMusic,
    FaVideo, FaGear, MdGroups3, PiPersonArmsSpreadFill, MdGroupAdd, GiPokerHand
  };

  return (
    <NavBar state={state} icons={icons}/>
  );
};

export default NavBarContainer;

