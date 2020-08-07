import layoutReducer from './index.reducer';
import layoutState from './index.state';
import { FnbType } from './index.type';

const Layout = {
  reducer: layoutReducer,
  initialState: layoutState,
};

export interface LayoutComponentType {
  fnbType: FnbType;
}
export default Layout;
