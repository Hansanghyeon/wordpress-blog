import { combineReducers } from 'redux';
import themeReducer from '@store/Reducers/theme';
import menuReducer from '@store/Reducers/menu';

export default combineReducers({
  themeState: themeReducer,
  menuState: menuReducer,
});
