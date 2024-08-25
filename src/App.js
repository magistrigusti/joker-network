import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Posts from './components/Posts/Posts';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';
import Video from './components/Video/Video';



const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar state={props.state.sidebarPage} />
      <div className="background_container ">
        <div className="text_overlay">
          <Routes>
            <Route path="/profile" element={<Profile profile={props.state.profilePage.profile} />} />
            <Route path="/posts" element={
              <Posts 
                profile={props.state.profilePage.profile}
                postsPage={props.state.postsPage} 
                dispatch={props.dispatch} 
              />} />
            <Route path="/friends" element={<Friends state={props.state.friendsPage} />} />
            <Route path="/dialogs" element={<Dialogs 
              // state={props.state.dialogsPage} 
              dispatch={props.dispatch}
              store={props.store}
            />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music state={props.state.musicPage} />} />
            <Route path="/video" element={<Video state={props.state.videoPage} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}





export default App;
