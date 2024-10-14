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

let initialState = {
  sidebarData: [
    { id: 1, to: "/", name: "Home", icon: <FaHome /> },
    { id: 2, to: "/profile", name: "Profile", icon: <PiPersonArmsSpreadFill />},
    { id: 3, to: "/posts", name: "Posts", icon: <FaDiagramNext /> },
    { id: 4, to: "/friends", name: "Friends", icon: <FaPeopleGroup /> },
    { id: 5, to: "/dialogs", name: "Dialogs", icon: <FaMessage /> },
    { id: 6, to: "/groups", name: "Groups", icon: <MdGroups3 />},
    { id: 7, to: '/users', name: "Users", icon: <MdGroupAdd />},
    { id: 8, to: "/news", name: "News",icon: <FaNewspaper /> },
    { id: 9, to: "/music", name: "Music", icon: <FaMusic /> },
    { id: 10, to: "/video", name: "Video", icon: <FaVideo /> },
    { id: 11, to: "/settings", name: "Settings", icon: <FaGear /> },
    
  ]
}

const sidebarReducer = (state = initialState, action) => {

  return state;
}

export default sidebarReducer;