import React from 'react';
import style from './Posts.module.css';
import MyPosts from './MyPosts/MyPosts';

const Posts = ({state}) => {
  let postsElements = state.postsData.map(
    post => <MyPosts message={post.message} like={post.likeCount} />
  );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={style.post_wrapper}>
      <div className={style.new_post}>
        <h5 className={style.new_post_title}>New post</h5>
        <div>
          <textarea className={style.input} 
            ref={newPostElement}
            placeholder="write your post"
          ></textarea>
        </div>
        <div>
          <button className={style.post_button}
            onClick={ addPost }
          >Add post</button>
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