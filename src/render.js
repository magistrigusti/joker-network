import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from'react-router-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';

const root = ReactDom.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} 
          addPost={addPost} 
          updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>
  )
}