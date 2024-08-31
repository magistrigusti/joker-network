import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import PostsContainer from './components/Posts/PostsContainer';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';
import Video from './components/Video/Video';
import Home from './components/Home/Home';
import { useSelector } from 'react-redux'; // Импортируем хуки

const App = () => {
  const sidebarState = useSelector(state => state.sidebarPage);
  const profileState = useSelector(state => state.profilePage);
  const postsState = useSelector(state => state.postsPage);
  const friendsState = useSelector(state => state.friendsPage);
  const dialogsState = useSelector(state => state.dialogsPage);
  const videoState = useSelector(state => state.videoPage);
  const musicState = useSelector(state => state.musicPage);

  return (
    <div className="app-wrapper">
      <Header state={sidebarState} />
      <NavBar state={sidebarState} />
      <div className="background_container">
        <div className="text_overlay">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile profile={profileState.profile} />} />
            <Route path="/posts" element={<PostsContainer  posts={postsState.posts} />} />
            <Route path="/friends" element={<Friends state={friendsState} />} />
            <Route path="/dialogs" element={<Dialogs state={dialogsState} />} />
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
