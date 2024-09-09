import React from 'react';
import style from './Posts.module.css';
import MyPosts from './MyPosts/MyPosts';

const Posts = (props) => {
  const postsElements = props.posts.map(post => (
    <MyPosts key={post.id} message={post.message} like={post.likeCount} photos={props.profile.photos} />
  ));

  const newPostElement = React.createRef();

  const handleAddPost = () => {
    props.addPost();
  };

  const handlePostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.post_wrapper}>
      <div className={style.new_post}>
        <img
          className={style.avatar}
          src={props.profile?.photos?.avatar}
          alt="avatar"
        />
        <h5 className={style.new_post_title}>New post</h5>
        <div>
          <textarea
            className={style.input}
            onChange={handlePostChange}
            placeholder="Write your post"
            value={props.newPostText}
            ref={props.newPostElement}
          />
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
