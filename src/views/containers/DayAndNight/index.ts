import DayAndNightToggle from '@atom/toggle/DayAndNight';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = (state: any) => {
  return { ...state };
};

const mapReduxDispatchToReactProps = (dispatch: any) => {
  return {
    onClick: () => {
      dispatch({ type: 'TOGGLE_DARK' });
    },
  };
};

const connector = connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps,
);

export default connector(DayAndNightToggle);
