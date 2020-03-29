import { createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state: any, action: any) => {
  if (state === undefined) {
    return {
      ...state,
      isDark: !!(
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ),
    };
  }
  if (action.type === 'TOGGLE_DARK') {
    return {
      isDark: !state.isDark,
    };
  }
  return state;
};

const initialState = {};

export default () =>
  reduxCreateStore(
    reducer,
    initialState,
    process.env.NODE_ENV !== 'production' ? composeWithDevTools() : null,
  );
