import MSB from '@organism/MSB';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({ menuState }: any) => {
  return { ...menuState };
};
const mapReduxDispatchToReactProps = (dispatch: any) => {
  return {
    inFunction: () => {
      dispatch({ type: 'TOGGLE_MENU' });
    },
  };
};

const connector = connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps,
);

export default connector(MSB);
