import React from 'react';
import style from './NewsItem.module.css';
import LinkBtn from '../LinkBtn/LinkBtn';

const NewsItem = ({ title, imageUrl, author, publishedAt, link, description, content }) => {
  return (
    <div className={style.news_wrapper}>
      <h3 className={style.title}>{title}</h3>



      <div className={style.news_item}>
        <img className={style.news_photo} src={imageUrl} alt={""} />
        <div>
          <div className={style.description}>{description}</div>
          <div className={style.content} >{content}</div>
        </div>
      </div>



      <div className={style.news_data}>
        <LinkBtn link={link} />
        <p>{author}</p>
        <div className={style.time}>{publishedAt}</div>

      </div>
    </div>
  );
};

export default NewsItem;
