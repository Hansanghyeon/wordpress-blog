import { combineReducers } from 'redux';
import themeReducer from '@store/Reducers/theme';
import menuReducer from '@store/Reducers/menu';
import layoutComponent from '@store/Reducers/layout';

export default combineReducers({
  themeState: themeReducer,
  menuState: menuReducer,
  layoutComponent: layoutComponent,
});
