import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PostsContainer from './components/Posts/PostsContainer';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';
import Video from './components/Video/Video';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import { useSelector } from 'react-redux'; // Импортируем хуки
import { TonConnectUIProvider } from "@tonconnect/ui-react"


const App = () => {
  const sidebarState = useSelector(state => state.sidebarPage);
  const profileState = useSelector(state => state.profilePage);
  const postsState = useSelector(state => state.postsPage);
  const friendsState = useSelector(state => state.friendsPage);
  const dialogsState = useSelector(state => state.dialogsPage);
  const videoState = useSelector(state => state.videoPage);
  const musicState = useSelector(state => state.musicPage);

   
  return (
    <TonConnectUIProvider 
    manifestUrl = "https://ton-connect.github.io/demo-dapp-with-wallet/"
    >
       
      <div className="app-wrapper">
        <Header state={sidebarState} />
        <NavBar state={sidebarState} />
        <div className="background_container">
          <div className="text_overlay">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfileContainer profileState={profileState.profile} />} />
              <Route path="/posts" element={<PostsContainer state={postsState.posts} />} />
              <Route path="/friends" element={<Friends state={friendsState} />} />
              <Route path="/dialogs" element={<DialogsContainer state={dialogsState} />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music state={musicState} />} />
              <Route path="/video" element={<Video state={videoState} />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
