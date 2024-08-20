import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from'react-router-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, subscribe } from './redux/state';
// import reportWebVitals from './reportWebVitals';
import state from './redux/state';

const root = ReactDom.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
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

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
