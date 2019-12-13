import React from 'react';
import App from './App';

export default {
  title: 'components|basic/App',
  components: App,
}

export const standard = () => <App name="Storybook" />;
export const big = () => <App name="Storybook" big />;