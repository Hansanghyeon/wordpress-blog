import { combineReducers } from 'redux';
import Theme from '@store/Theme';
import Layout from '@store/Layout';
import Menu from '@store/Menu';

export default combineReducers({
  themeState: Theme.reducer,
  menuState: Menu.reducer,
  layoutComponent: Layout.reducer,
});
