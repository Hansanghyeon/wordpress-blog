import { createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// store
import rootReducers from '@store/rootReducers';
import Theme, { ThemeStateType } from '@store/Theme';
import Layout, { LayoutComponentType } from '@store/Layout';
import Menu, { MenuStateType } from '@store/Menu';

type InitialStateType = {
  themeState: ThemeStateType;
  menuState: MenuStateType;
  layoutComponent: LayoutComponentType;
};
const initialState: InitialStateType = {
  ...Theme.initialState,
  ...Menu.initialState,
  ...Layout.initialState,
};

const createStore = () =>
  reduxCreateStore(
    rootReducers,
    initialState,
    process.env.NODE_ENV !== 'production' ? composeWithDevTools() : undefined,
  );
export default createStore;
