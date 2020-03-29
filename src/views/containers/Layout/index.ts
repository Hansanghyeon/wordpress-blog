import Layout from '@template/layout';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({ themeState }: any) => {
  return { ...themeState };
};

const connector = connect(mapReduxStateToReactProps);

export default connector(Layout);
