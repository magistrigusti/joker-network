// NewsItem.jsx
import React from 'react';
import './NewsItem.module.css'; // Стили для элемента новости

const NewsItem = ({ title, imageUrl }) => {
  return (
    <div className="news-item">
      <img src={imageUrl} alt={title} className="news-image" />
      <h3 className="news-title">{title}</h3>
    </div>
  );
};

export default NewsItem;
