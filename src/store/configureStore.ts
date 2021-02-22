import { createStore, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
// store
import rootReducers from '@store/rootReducer';
import Menu from '@store/Menu';
import Layout from '@store/Layout';

const initialState = {
  ...Menu.initialState,
  ...Layout.initialState,
};

const configureStore: any = () => {
  const middlewares: any[] = []; // 미들웨어들을 넣으면 된다.
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducers, initialState, enhancer);
  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});
export default wrapper;
