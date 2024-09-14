// NewsPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNews, setStatus, setError } from '../../redux/news-reducer';
import axios from 'axios';
import NewsItem from './NewsItem/NewsItem'; // Компонент для отображения отдельной новости
import './NewsPage.module.css'; // Стили для страницы новостей

const NewsPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.newsPage);

  useEffect(() => {
    const fetchNews = async () => {
      dispatch(setStatus('loading')); // Устанавливаем статус загрузки
      try {
        const response = await axios.get('https://example.com/api/news'); // Замените на реальный URL
        dispatch(setNews(response.data)); // Обновляем состояние новостей в Redux
        dispatch(setStatus('succeeded')); // Устанавливаем статус успешной загрузки
      } catch (err) {
        dispatch(setError(err.toString())); // Устанавливаем ошибку
        dispatch(setStatus('failed')); // Устанавливаем статус ошибки
      }
    };

    fetchNews();
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="news-page">
      {items.map(news => (
        <NewsItem key={news.id} title={news.title} imageUrl={news.urlToImage} />
      ))}
    </div>
  );
};

export default NewsPage;
