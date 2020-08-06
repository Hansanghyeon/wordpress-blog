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
      switch (path) {
        case 'Project':
          dispatch({ type: 'PROJECT_PAGE' });
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
