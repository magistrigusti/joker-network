import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { addPostTextActionCreator, updateNewPostTextActionCreator } from '../../redux/posts-reducer';
import Posts from './Posts';
//posts
const PostsContainer = (props) => {
  const postsState = useSelector(state => state.postsPage);
  const profile = useSelector(state => state.profilePage.profile);
  const dispatch = useDispatch();

  const addPost = () => {
    dispatch(addPostTextActionCreator());
  }

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    dispatch(action);
  }

  return (
    <Posts 
      updateNewPostText={onPostChange} 
      addPost={addPost} 
      posts={postsState.postsData} 
      profile={profile} 
      newPostText={postsState.newPostText}
    />
  );
}

export default PostsContainer;
