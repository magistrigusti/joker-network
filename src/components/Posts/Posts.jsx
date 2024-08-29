import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Posts.module.css';
import MyPosts from './MyPosts/MyPosts';
import { addPost, updateNewPostText } from '../../redux/posts-reducer';

const Posts = () => {
  const postsState = useSelector(state => state.postsPage);
  const profile = useSelector(state => state.profilePage.profile);
  const dispatch = useDispatch();

  const postsElements = postsState.postsData.map(post => (
    <MyPosts key={post.id} message={post.message} like={post.likeCount} />
  ));

  const handleAddPost = () => {
    dispatch(addPost());
  };

  const handlePostChange = (event) => {
    dispatch(updateNewPostText(event.target.value));
  };

  return (
    <div className={style.post_wrapper}>
      <div className={style.new_post}>
        <img className={style.avatar} src={profile.photos.avatar} alt="" />
        <h5 className={style.new_post_title}>New post</h5>
        <div>
          <textarea
            className={style.input}
            onChange={handlePostChange}
            placeholder="Write your post"
            value={postsState.newPostText}
          ></textarea>
        </div>
        <div>
          <button className={style.post_button} onClick={handleAddPost}>
            Add post
          </button>
        </div>
      </div>
      <div>
        <h5 className={style.post_title}>My posts:</h5>
        <div className={style.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  );
};

export default Posts;
