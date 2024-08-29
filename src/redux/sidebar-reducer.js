import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaDiagramNext } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

let initialState = {
  sidebarData: [
    { id: 1, to: "/profile", name: "Profile", icon: <FaHome /> },
    { id: 2, to: "/posts", name: "Posts", icon: <FaDiagramNext /> },
    { id: 3, to: "/friends", name: "Friends", icon: <FaPeopleGroup /> },
    { id: 4, to: "/dialogs", name: "Dialogs", icon: <FaMessage /> },
    { id: 5, to: "/news", name: "News",icon: <FaNewspaper /> },
    { id: 6, to: "/music", name: "Music", icon: <FaMusic /> },
    { id: 7, to: "/video", name: "Video", icon: <FaVideo /> },
    { id: 8, to: "/settings", name: "Settings", icon: <FaGear /> }
  ]
}

const sidebarReducer = (state = initialState, action) => {

  return state;
}

export default sidebarReducer;