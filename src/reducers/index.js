import { combineReducers } from 'redux';
import axios from 'axios';

const NewsReducer = () => {
  axios({
      method: 'get',
      url: 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=bdbcae478d174e04ba1504b2914cc143'
  }).then(response => response.articles);
};

export default combineReducers({
  news: NewsReducer
});
