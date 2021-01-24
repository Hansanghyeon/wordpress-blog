import layoutReducer from './reducer';
import layoutState from './state';

const Layout = {
  reducer: layoutReducer,
  initialState: layoutState,
};

export interface LayoutStateType {
  fnbType: string;
  msbType: string;
}
export default Layout;
