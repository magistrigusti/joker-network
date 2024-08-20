import React from 'react';
import { useEffect, useState } from 'react';
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
    return <p>Loading...</p>
  }
  if (error) return <p>Error: {error}</p> 

  return (
    <div className={style.news_wrapper}>
      <p>Latest News</p>

      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News;
