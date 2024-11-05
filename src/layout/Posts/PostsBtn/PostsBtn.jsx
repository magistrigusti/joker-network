import React from 'react';
import style from './PostsBtn.module.css';

const PostsBtn = ({ onClick, className }) => {
  return (
    <div className={style.button_wrapper}>
      <button className={style.button} onClick={onClick}>Add Post</button>
    </div>
  )
}



export default PostsBtn;