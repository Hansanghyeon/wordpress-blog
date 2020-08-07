import layoutReducer from './index.reducer';
import layoutState from './index.state';

const Layout = {
  reducer: layoutReducer,
  initialState: layoutState,
};

export interface LayoutComponentType {
  fnbType: string;
  msbType: string;
}
export default Layout;
