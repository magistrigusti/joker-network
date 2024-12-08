import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Измененный импорт
import postsReducer from './posts-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from './friends-reducer';
import musicReducer from './music-reducer';
import videoReducer from './video-reducer';
import groupsReducer from './groups-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer';
import pokerReducer from './poker-reducer';
import authReducer from './auth-reducer';

// Комбинируем редюсеры
const rootReducer = combineReducers({
  profilePage: profileReducer,
  postsPage: postsReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  sidebarPage: sidebarReducer,
  videoPage: videoReducer,
  musicPage: musicReducer,
  groupsPage: groupsReducer,
  newsPage: newsReducer,
  usersPage: usersReducer, 
  pokerPage: pokerReducer,
  auth: authReducer,
});

// Создаем хранилище с middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

window.store = store;

export default store;

