import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={style.post_wrapper}>
      <div className={style.new_post}>
        <h5 className={style.new_post_title}>New post</h5>
        <textarea className={style.input} placeholder="write your post"></textarea>
        <button className={style.post_button}>Add post</button>
      </div>


      <div>
        <h5 className={style.post_title}>My posts:</h5>
        <Post message="Hi, my frends." />
        <Post message="How are your life" />
      </div>
    </div>
  )
}

export default MyPosts;