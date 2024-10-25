
let initialState = {
  sidebarData: [
    { id: 1, to: "/", name: "Home", iconName: "FaHome" },
    { id: 2, to: "/profile", name: "Profile", iconName: "PiPersonArmsSpreadFill" },
    { id: 3, to: "/posts", name: "Posts", iconName: "FaDiagramNext" },
    { id: 4, to: "/friends", name: "Friends", iconName: "FaPeopleGroup" },
    { id: 5, to: "/dialogs", name: "Dialogs", iconName: "FaMessage" },
    { id: 6, to: "/groups", name: "Groups", iconName: "MdGroups3" },
    { id: 7, to: "/users", name: "Users", iconName: "MdGroupAdd" },
    { id: 8, to: "/news", name: "News", iconName: "FaNewspaper" },
    { id: 9, to: "/music", name: "Music", iconName: "FaMusic" },
    { id: 10, to: "/video", name: "Video", iconName: "FaVideo" },
    { id: 11, to: "/settings", name: "Settings", iconName: "FaGear" },
    { id: 12, to: "/poker", name: "Poker", iconName: "GiPokerHand" }
  ]
};


const sidebarReducer = (state = initialState, action) => {

  return state;
}

export default sidebarReducer;
