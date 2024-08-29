import React from 'react';
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
import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки

const App = () => {
  const sidebarState = useSelector(state => state.sidebarPage);
  const profileState = useSelector(state => state.profilePage);
  const postsState = useSelector(state => state.postsPage);
  const friendsState = useSelector(state => state.friendsPage);
  const dialogsState = useSelector(state => state.dialogsPage);
  const videoState = useSelector(state => state.videoPage);
  const musicState = useSelector(state => state.musicPage);
  const dispatch = useDispatch(); // Получаем dispatch из хука

  return (
    <div className="app-wrapper">
      <Header />
      <NavBar state={sidebarState} />
      <div className="background_container">
        <div className="text_overlay">
          <Routes>
            <Route path="/profile" element={<Profile profile={profileState.profile} />} />
            <Route path="/posts" element={
              <Posts postsPage={postsState} dispatch={dispatch} />} />
            <Route path="/friends" element={<Friends state={friendsState} />} />
            <Route path="/dialogs" element={<Dialogs state={dialogsState} dispatch={dispatch} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music state={musicState} />} />
            <Route path="/video" element={<Video state={videoState} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;


