import { combineReducers } from 'redux';
import { list } from './list/reducer';
import { input } from './input/reducer';

const rootReducer = combineReducers(
  {
    list,
    input
  }
)

export default rootReducer;