import React, { useState } from 'react';
import axios from 'axios';
import style from './News.module.css';

const News = () => {
  const [articles, setArticles] = useState([]);

  const getNews = () => {
    if (articles.length === 0) {
      axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=17c01414365e4e76a4a03eedc855029d")
        .then(response => {
          setArticles(response.data.articles);  // Используем setArticles для обновления состояния
        })
        .catch(error => {
          console.error('Ошибка при загрузке новостей:', error);
        });
    }
  };

  return (
    <div className={style.news_wrapper}>
      <h4 className={style.title}>Latest News</h4>
      <button className={style.button_news} onClick={getNews}>Get News</button>
      <ul>
        {articles.map((article, index) => (
          <li className={style.news_item} key={index}>
            <h3 className={style.news_title}>{article.title}</h3>
            <div className={style.news_content}>
              {article.urlToImage && (
                <img className={style.news_img} src={article.urlToImage} alt={article.title} />
              )}
              <p>{article.description}</p>
            </div>
            <a className={style.news_link} href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
