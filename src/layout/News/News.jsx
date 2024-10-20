import React, { useState } from 'react';
import style from './News.module.css';
import NewsItem from './NewsItem/NewsItem';

const News = (props) => {
  const [portionNumber, setPortionNumber] = useState(1);
  const portionSize = 10;
  let pagesCount = Math.ceil(props.totalNewsCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.news_wrapper}>
      <div className={style.pagination}>
        {portionNumber > 1 && (
          <button onClick={() => setPortionNumber(portionNumber - 1)}>{"<"}</button>
        )}
        {pages
          .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map(page => (
            <span
              key={page}
              className={`${style.pageNumber} ${props.currentPage === page && style.selectedPage}`}
              onClick={() => props.onPageChanged(page)}
            >
              {page}
            </span>
          ))}
        {portionNumber < portionCount && (
          <button onClick={() => setPortionNumber(portionNumber + 1)}>{">"}</button>
        )}
      </div>
      <h4 className={style.title}>Latest News</h4>
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

