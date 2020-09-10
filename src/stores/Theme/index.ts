import themeState from './index.state';
import themeReducer from './index.reducer';

const Theme = {
  initialState: themeState,
  reducer: themeReducer,
};

export interface ThemeStateType {
  isDark?: () => boolean;
}
export default Theme;
