import MenuToggle from '.';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({ menuState }: any) => {
  return { ...menuState };
};

const mapReduxDispatchToReactProps = (dispatch: any) => {
  return {
    onClick: () => {
      dispatch({ type: 'TOGGLE_MENU' });
    },
  };
};

const connector = connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps,
);

export default connector(MenuToggle);
