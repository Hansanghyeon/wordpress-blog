import Layout from '@template/Layout';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({
  themeState,
  menuState,
  layoutComponent,
}: any) => {
  return { ...themeState, ...menuState, ...layoutComponent };
};

const connector = connect(mapReduxStateToReactProps);

export default connector(Layout);
