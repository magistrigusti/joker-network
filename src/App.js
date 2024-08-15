import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Posts from './components/Posts/Posts';
import Friends from './components/Friends/Friends';



const App = ({ state }) => {

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar state={state.sidebarPage} />
      <div className="background_container ">
        <div className="text_overlay">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/posts" element={<Posts state={state.postsPage} />} />
            <Route path="/friends" element={<Friends state={state.friendsPage} />} />
            <Route path="/dialogs" element={<Dialogs state={state.dialogsPage} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}





export default App;
