// const FNB_AND_MSB_HIDDEN = 'FNB_AND_MSB_HIDDEN';
// const OUT_PROJECT_PAGE = 'OUT_PROJECT_PAGE';
const MSB_HIDDEN = 'MSB_HIDDEN';

const layoutReducer = (state: any, action: any) => {
  switch (action.type) {
    case MSB_HIDDEN:
      return { ...state, fnbType: 'default', msbType: 'hidden' };
    default:
      return { ...state };
  }
};

export default layoutReducer;