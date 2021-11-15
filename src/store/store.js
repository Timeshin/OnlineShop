import { combineReducers, createStore } from 'redux';
import { setDataSlice, getDataSlice } from '../reducer';

const rootReducer = combineReducers({
  categories: getDataSlice,
  products: setDataSlice
})

export const store = createStore(rootReducer);