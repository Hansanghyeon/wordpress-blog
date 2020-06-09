import { createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '@store/rootReducers';

export interface MenuStateType {
  isActive?: boolean;
}
export interface ThemeStateuType {
  isDark?: () => boolean;
}
interface InitialStateType {
  themeState: ThemeStateuType;
  menuState: MenuStateType;
}
const initialState: InitialStateType = {
  themeState: {
    isDark: () => {
      const result = !!(
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
      return window !== undefined ? result : false;
    },
  },
  menuState: {
    isActive: false,
  },
};

const createStore = () =>
  reduxCreateStore(
    rootReducers,
    initialState,
    process.env.NODE_ENV !== 'production' ? composeWithDevTools() : undefined,
  );
export default createStore;
