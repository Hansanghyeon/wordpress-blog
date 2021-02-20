import Layout from '.';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({ menuState, layoutState }: any) => {
  return { menuState, layoutState };
};

const mapReduxDispatchToReactProps = (dispatch: any) => {
  return {
    renderToFunction: (pageName: string) => {
      switch (pageName) {
        case 'home':
          dispatch({ type: 'MSB_HIDDEN' });
          break;
        default:
          break;
      }
    },
  };
};

const connector = connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps,
);

export default connector(Layout);
