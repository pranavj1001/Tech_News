import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  news: NewsReducer,
  selectedNewsId: SelectionReducer
});
