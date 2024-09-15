import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './News.module.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=17c01414365e4e76a4a03eedc855029d');
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={style.news_wrapper}>
      <h4 className={style.title}>Latest News</h4>

      <ul>
        {articles.map((article, index) => (
          <li className={style.news_item} key={index}>
            <h3 className={style.news_title}>{article.title}</h3>
            <div className={style.news_content}>
              {article.urlToImage &&
                <img className={style.news_img} src={article.urlToImage} alt={article.title} />
              }
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
