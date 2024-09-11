import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './layout/Profile/Profile';
import DialogsContainer from './layout/Dialogs/DialogsContainer';
import PostsContainer from './layout/Posts/PostsContainer';
import FriendsContainer from './layout/Friends/FriendsContainer';
import News from './layout/News/News';
import MusicContainer from './layout/Music/MusicContainer';
import VideoContainer from './layout/Video/VideoContainer';
import Home from './layout/Home/Home';
import Settings from './layout/Settings/Settings';
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
              <Route path="/friends" element={<FriendsContainer state={friendsState} />} />
              <Route path="/dialogs" element={<DialogsContainer state={dialogsState} />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<MusicContainer state={musicState} />} />
              <Route path="/video" element={<VideoContainer state={videoState} />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
