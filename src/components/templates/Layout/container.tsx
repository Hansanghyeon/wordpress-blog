import Layout from '.';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({ menuState, layoutState }: any) => {
  return { menuState, layoutState };
};

const mapReduxDispatchToReactProps = (dispatch: any) => {
  return {
    renderToFunction: (path: string) => {
      switch (true) {
        case /\/about/g.test(path):
          dispatch({ type: 'MSB_HIDDEN' });
          break;
        default:
          dispatch({ type: 'OUT_PROJECT_PAGE' });
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
