import React from 'react';
import style from './News.module.css';
import NewsItem from './NewsItem/NewsItem';
import Pagination from '../../components/common/Pagination/Pagination';

const News = (props) => {

  return (
    <div className={style.news_wrapper}>
      <h4 className={style.title}>Latest News</h4>

      <Pagination onPageChanged={props.onPageChanged} 
                currentPage={props.currentPage} 
                totalUsersCount={props.totalNewsCount} 
                pageSize={props.pageSize} 
      />

      {props.news.map((article) => (
        <NewsItem key={article.source.id} 
          title={article.title} 
          imageUrl={article.urlToImage} 
          author={article.author}
          publishedAt={article.publishedAt}
          link={article.url}
          description={article.description}
          content={article.content}
        />
      ))}
    </div>
  );
};

export default News;

