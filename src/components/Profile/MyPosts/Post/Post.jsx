import React from 'react';
import style from './Post.module.css';
import avatar from '../../../../img/avatar.png';
import like from '../../../../img/like.png';

const Post = () => {
  return (
    <div className={style.posts}>
      <div className={style.post_item}>
        <img className={style.post_avatar} src={avatar} alt="avatar img" />
        Hi my friends
        
        <span>
          <img className={style.like} src={like} alt="like img" />
          2
        </span>
      </div>
      <div className={style.post_item}>
        <img className={style.post_avatar} src={avatar} alt="avatar img" />
        how are you?
        
        <span>
          <img className={style.like} src={like} alt="like img" />
          5
        </span>
      </div>
    </div>
  )
}

export default Post;