import Layout from '@template/Layout';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({ themeState, menuState }: any) => {
  return { ...themeState, ...menuState };
};

const connector = connect(mapReduxStateToReactProps);

export default connector(Layout);
