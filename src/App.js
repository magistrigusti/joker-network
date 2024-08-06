import React from "react";
import './App.css';
import logo from "./img/logo.png";



const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <nav className="nav">
        <div><a>Profile</a></div>
        <div><a>Message</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className="background-container">
        <div className="text-overlay">
          <div>avatar + discription</div>
          <div>My post
            <div>New post</div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}





export default App;
