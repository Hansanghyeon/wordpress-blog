import Utterances from '@molecule/Utterances';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = (state: any) => {
  return { ...state };
};

const connector = connect(mapReduxStateToReactProps);

export default connector(Utterances);
