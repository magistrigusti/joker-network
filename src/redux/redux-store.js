import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import friendsReducer from './friends-reducer';

// Комбинируем редюсеры
const rootReducer = combineReducers({
  profilePage: profileReducer,
  postsPage: postsReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  sidebarPage: sidebarReducer,
});

// Создаем хранилище
const store = configureStore({
  reducer: rootReducer,
});

export default store;

