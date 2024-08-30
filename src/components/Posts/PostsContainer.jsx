import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostText, updateNewPostText } from '../../redux/posts-reducer';
import Posts from './Posts';

const PostsContainer = () => {
  const postsState = useSelector(state => state.postsPage);
  const profile = useSelector(state => state.profilePage.profile);
  const dispatch = useDispatch();

  const addPost = () => {
    dispatch(addPostText());
  }

  const onPostChange = (text) => {
    dispatch(updateNewPostText(text));
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
