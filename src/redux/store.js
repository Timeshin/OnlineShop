import { combineReducers, createStore } from 'redux';
import { setDataSlice, getDataSlice } from './';

const rootReducer = combineReducers({
  categories: getDataSlice,
  products: setDataSlice
})

export const store = createStore(rootReducer);