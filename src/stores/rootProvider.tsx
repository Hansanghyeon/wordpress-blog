import React from 'react';
import { Provider } from 'react-redux';

import createStore from '@store/rootStore';

interface prop {
  element: React.ReactNode;
}
export default ({ element }: prop) => {
  return <Provider store={createStore()}>{element}</Provider>;
};
