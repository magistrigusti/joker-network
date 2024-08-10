import React from "react";
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Posts from './components/Posts/Posts';



const App = (props) => {
  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="background_container ">
          <div className="text_overlay">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/dialogs" element={<Dialogs />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
