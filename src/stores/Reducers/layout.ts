// eslint-disable-next-line import/no-cycle
import { FnbType } from '../rootStore';

const PROJECT_PAGE = 'PROJECT_PAGE';
const OUT_PROJECT_PAGE = 'OUT_PROJECT_PAGE';
const layoutReducer = (state: any, action: any) => {
  switch (action.type) {
    case OUT_PROJECT_PAGE:
      return { ...state, fnbType: FnbType.default };
    case PROJECT_PAGE:
      return { ...state, fnbType: FnbType.hidden };
    default:
      return { ...state };
  }
};

export default layoutReducer;
