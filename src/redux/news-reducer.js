import { newsAPI } from '../api/api';

const SET_NEWS = "SET_NEWS";
const SET_NEWS_TOTAL_COUNT = "SET_NEWS_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  news: [], // Вместо items
  pageSize: 3,
  totalResults: 0, 
  currentPage: 1,
  isFetching: true
};

const newsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_NEWS: 
      return {...state, news: action.news}; // Используем news, как в initialState
    case SET_CURRENT_PAGE: 
      return {...state, currentPage: action.currentPage};
    case SET_NEWS_TOTAL_COUNT: 
      return {...state, totalResults: action.count}; // totalResults вместо totalNewsCount
    case TOGGLE_IS_FETCHING: 
      return {...state, isFetching: action.isFetching};
    default:
      return state;
  }
};

export const setNews = (news) => ({type: SET_NEWS, news});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setNewsTotalCount = (count) => ({type: SET_NEWS_TOTAL_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getNews = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
      newsAPI.getNews(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setNews(data.articles));
        dispatch(setNewsTotalCount(data.totalResults));
      })
  }
}

export default newsReducer;

