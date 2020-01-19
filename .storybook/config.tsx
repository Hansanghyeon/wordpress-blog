import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
// NOTE  "notion://www.notion.so/4log/gatsby-Provider-state-7845ea0820b44f998f7ba316c69ed0fd"
import darkModeTheme from '../src/styles/darkModeTheme';
import gridTheme from '../src/utils/gridTheme';

configure(
  require.context('../src/components', true, /\.stories\.tsx$/),
  module,
);
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
addDecorator(story => (
  <ThemeProvider theme={darkModeTheme}>{story()}</ThemeProvider>
));
addParameters({
  viewport: {
    defaultViewport: 'someDefualt',
  },
});
