import Layout from '@template/layout';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = (state: any) => {
  return { ...state };
};

const connector = connect(mapReduxStateToReactProps);

export default connector(Layout);
