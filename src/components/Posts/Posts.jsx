import React from 'react';
import style from './Posts.module.css';
import MyPosts from './MyPosts/MyPosts';

const Posts = () => {
  let postsData = [
    {id: 1, message: "Hi, my frends.", likeCount: 5},
    {id: 2, message: "How are your life", likeCount: 12},
    {id: 3, message: "welcome to my social network", likeCount: 17}
  ];

  let postsElements = postsData.map(post => <MyPosts message={post.message} like={post.likeCount} />);

  return (
    <div className={style.post_wrapper}>
      <div className={style.new_post}>
        <h5 className={style.new_post_title}>New post</h5>
        <div>
          <textarea className={style.input} placeholder="write your post"></textarea>
        </div>
        <div>
          <button className={style.post_button}>Add post</button>
        </div>
      </div>

      <div>
        <h5 className={style.post_title}>My posts:</h5>
        { postsElements }
      </div>
    </div>
  )
}

export default Posts;