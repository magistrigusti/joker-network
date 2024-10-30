import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setNews, setCurrentPage, setNewsTotalCount, toggleIsFetching, getNews } from '../../redux/news-reducer';
import News from './News';
import Preloader from '../../components/common/Preloader/Preloader';

const NewsContainer = (props) => {
  const { news, currentPage, pageSize, isFetching, totalNewsCount, getNews } = props;

  useEffect(() => {
    getNews(currentPage, pageSize);
  }, [currentPage, pageSize, getNews]);

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    getNews(pageNumber, pageSize);
  };

  return (
    <div>
      {isFetching && <Preloader />}
      <News 
        news={news}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        currentPage={currentPage}
        totalNewsCount={totalNewsCount}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.newsPage.news,
  pageSize: state.newsPage.pageSize,
  totalNewsCount: state.newsPage.totalResults,
  currentPage: state.newsPage.currentPage,
  isFetching: state.newsPage.isFetching,
});

export default connect(mapStateToProps, { setNews, setCurrentPage, setNewsTotalCount, toggleIsFetching, getNews })(NewsContainer);
