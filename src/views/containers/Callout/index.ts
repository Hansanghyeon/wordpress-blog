import Callout from '@molecule/Callout';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = ({ themeState }: any) => {
  return { ...themeState };
};

const connector = connect(mapReduxStateToReactProps);

export default connector(Callout);
