import React from 'react';
import { Provider } from 'react-redux';

import createStore from './rootStore';

export default ({ element }: any) => {
  const store = createStore();
  return <Provider store={store}>{element}</Provider>;
};
