import React from 'react';
import style from './NewsItem.module.css';

const NewsItem = ({ title, imageUrl, author, publishedAt, link }) => {
  return (
    <>
      <h3 className={style.title}>{title}</h3>
      <div className={style.news_item}>
        
        <img src={imageUrl} alt={""} className="news-image" />

        <button className={style.news_btn}>
          <a href={link}>Read More</a>
        </button>

          <div className={style.time}>{publishedAt}</div>

      </div>
    </>
  );
};

export default NewsItem;
