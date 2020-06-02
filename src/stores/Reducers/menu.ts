const TOGGLE_MENU = 'TOGGLE_MENU';
const menuReducer = (state: any, action: any) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isActive: !state.isActive };
    default:
      return { ...state };
  }
};

export default menuReducer;
