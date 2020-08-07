const TOGGLE_DARK = 'TOGGLE_DARK';
const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case TOGGLE_DARK:
      return { ...state, isDark: !state.isDark };
    default:
      return { ...state };
  }
};

export default themeReducer;
