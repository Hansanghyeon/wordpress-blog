const PROJECT_PAGE = 'PROJECT_PAGE';
const OUT_PROJECT_PAGE = 'OUT_PROJECT_PAGE';
const layoutReducer = (state: any, action: any) => {
  switch (action.type) {
    case OUT_PROJECT_PAGE:
      return { ...state, fnbType: 'default', msbType: 'default' };
    case PROJECT_PAGE:
      return { ...state, fnbType: 'hidden', msbType: 'hidden' };
    default:
      return { ...state };
  }
};

export default layoutReducer;
