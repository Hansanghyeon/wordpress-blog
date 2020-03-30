import { createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '@store/rootReducers';

const initialState = {
  themeState: {
    isDark: () => {
      const result = !!(
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
      return window !== undefined ? result : false;
    },
  },
};

const createStore = () =>
  reduxCreateStore(
    rootReducers,
    initialState,
    process.env.NODE_ENV !== 'production' ? composeWithDevTools() : undefined,
  );
export default createStore;
