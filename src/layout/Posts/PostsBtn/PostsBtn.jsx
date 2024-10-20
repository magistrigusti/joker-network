import React from 'react';
import style from './PostsBtn.module.css';

const PostsBtn = () => {
  return (
    <div className={style.button_wrapper}>
      <button className={style.button}>Add Post</button>
    </div>
  )
}

export default PostsBtn;