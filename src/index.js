// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux'; // Импортируем Provider
import { ThemeProvider } from './Context/ThemeContext'; // Импортируем ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> {/* Оборачиваем приложение в Provider */}
        <ThemeProvider> {/* Оборачиваем приложение в ThemeProvider */}
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

