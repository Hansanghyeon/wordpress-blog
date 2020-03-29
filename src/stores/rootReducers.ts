import { combineReducers } from 'redux';
import themeReducer from '@store/Reducers/theme';

export default combineReducers({ themeState: themeReducer });
