import Layout from '@template/Layout';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({
  themeState,
  menuState,
  layoutComponent,
}: any) => {
  return { ...themeState, ...menuState, ...layoutComponent };
};

const mapReduxDispatchToReactProps = (dispatch: any) => {
  return {
    renderToFunction: (path: string) => {
      switch (true) {
        case /\/project/g.test(path):
          dispatch({ type: 'FNB_AND_MSB_HIDDEN' });
          break;
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
