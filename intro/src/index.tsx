import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { GridThemeProvider } from 'styled-bootstrap-grid';

import App from '@/components/App';
import store from '@/features';
import GlobalStyle from '@/styles/GlobalStyle';
import gridSystem from '@/utils/gridSystem';
import history from '@/utils/history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <GridThemeProvider gridTheme={gridSystem}>
        <>
          <GlobalStyle />
          <App />
        </>
      </GridThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
