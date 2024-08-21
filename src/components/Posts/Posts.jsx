import React from 'react';
import style from './Posts.module.css';
import MyPosts from './MyPosts/MyPosts';

//props=postsPage
const Posts = (props) => {
  let postsElements = props.postsPage.postsData.map(
    post => <MyPosts message={post.message} like={post.likeCount} />
  );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text};
    props.dispatch(action);
  }

  return (
    <div className={style.post_wrapper}>
      <div className={style.new_post}>
        <img className={style.avatar} src={props.profile.photos.avatar} alt="" />
        <h5 className={style.new_post_title}>New post</h5>
        <div>
          <textarea className={style.input} 
            onChange={ onPostChange }
            ref={newPostElement}
            placeholder="write your post"
            value={props.postsPage.newPostText}
          ></textarea>
        </div>
        <div>
          <button className={style.post_button}
            onClick={ addPost }
          >Add post</button>
        </div>
      </div>

      <div >
        <h5 className={style.post_title}>My posts:</h5>
        <div className={style.posts}>
        { postsElements }
        </div>
      </div>
    </div>
  )
}

export default Posts;