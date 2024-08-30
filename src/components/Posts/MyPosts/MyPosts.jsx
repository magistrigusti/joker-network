import React from 'react';
import style from './MyPosts.module.css';
import like from '../../../img/like.png';

const MyPosts = (props) => {
  return (
    <div className={style.posts}>
      <div className={style.post_item}>
        <img className={style.post_avatar} src={props.photos?.avatar || 'default-avatar-url.jpg'} alt="avatar img" />
        {props.message}
        <div>
          <img className={style.like} src={like} alt="like img" />
          {props.like}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;
