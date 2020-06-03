import MSB from '@organism/MSB';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({ menuState }: any) => {
  return { ...menuState };
};

const connector = connect(mapReduxStateToReactProps);

export default connector(MSB);
