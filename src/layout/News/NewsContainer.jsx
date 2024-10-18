import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setNews, setCurrentPage, setNewsTotalCount, toggleIsFetching } from '../../redux/news-reducer';
import axios from 'axios';
import News from './News';

const NewsContainer = (props) => {
  const dispatch = useDispatch();
  const { news, currentPage, pageSize, isFetching, totalResults } = useSelector(state => state.newsPage);

  useEffect(() => {
    const fetchNews = async () => {
      props.toggleIsFetching(true);
      axios.get(`https://newsapi.org/v2/top-headlines?page=${props.currentPage}&pageSize=${props.pageSize}&country=us&category=business&apiKey=17c01414365e4e76a4a03eedc855029d`)
        .then(response => {
          props.toggleIsFetching(false);
          props.setNews(response.data.articles);
          props.setNewsTotalCount(response.data.totalResults);
        });
    };

    fetchNews();
  }, [props.currentPage]);

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.toggleIsFetching(true);
    axios.get(`https://newsapi.org/v2/top-headlines?page=${pageNumber}&pageSize=${props.pageSize}&country=us&category=business&apiKey=17c01414365e4e76a4a03eedc855029d`)
      .then(response => {
        props.toggleIsFetching(false);
        props.setNews(response.data.articles);
      });
  };

  return (
    <News 
      news={news} 
      onPageChanged={onPageChanged} 
      pageSize={pageSize} 
      currentPage={currentPage} 
      totalNewsCount={totalResults}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    pageSize: state.newsPage.pageSize,
    totalNewsCount: state.newsPage.totalResults,
    currentPage: state.newsPage.currentPage,
    isFetching: state.newsPage.isFetching
  };
};

export default connect(mapStateToProps, { setNews, setCurrentPage, setNewsTotalCount, toggleIsFetching })(NewsContainer);
