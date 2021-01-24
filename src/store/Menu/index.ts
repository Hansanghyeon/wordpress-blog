import menuState from './state';
import menuReducer from './reducer';

const Menu = {
  initialState: menuState,
  reducer: menuReducer,
};

export interface MenuStateType {
  isActive?: boolean;
}
export default Menu;
