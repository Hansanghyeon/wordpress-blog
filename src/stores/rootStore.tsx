/* eslint-disable */
import { createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state: any) => {
  return state;
};

const initialState = {};

const creatStore = () =>
  reduxCreateStore(reducer, initialState, composeWithDevTools());
export default creatStore;
