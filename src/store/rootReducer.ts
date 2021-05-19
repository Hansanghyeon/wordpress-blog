import { combineReducers } from 'redux';
import Menu from '@store/Menu';
import Layout from '@store/Layout';

export default combineReducers({
  menuState: Menu.reducer,
  layoutState: Layout.reducer,
});
