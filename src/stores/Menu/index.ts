import menuState from './index.state';
import menuReducer from './index.reducer';

const Menu = {
  initialState: menuState,
  reducer: menuReducer,
};

export interface MenuStateType {
  isActive?: boolean;
}
export default Menu;
