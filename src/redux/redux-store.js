import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from './friends-reducer';
import musicReducer from './music-reducer';
import videoReducer from './video-reducer';
import groupsReducer from './groups-reducer';

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
});

// Создаем хранилище
const store = configureStore({
  reducer: rootReducer,
});

export default store;

