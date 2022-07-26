import React from 'react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

export const decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        color: '$text',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Story />
    </div>
  ),
];

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    stylePreview: true,
    darkClass: 'dark-theme',
    lightClass: 'light-theme',
    current:
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    light: {
      ...themes.normal,
      // accent0, accent1
      appBg: '#F5F5F5',
      barBg: '#EDEDED',
      background: '#F5F5F5',
      appContentBg: '#F5F5F5',
      // radii xs
      appBorderRadius: 7,
      brandTitle: '개발자 상현에 스토리북',
      brandImage: '/cat.png',
      brandUrl: '/',
    },
    dark: {
      ...themes.dark,
      // accent0, accent1
      appBg: '#161616',
      barBg: '#262626',
      background: '#161616',
      appContentBg: '#161616',
      // radii xs
      appBorderRadius: 7,
      brandTitle: '개발자 상현에 스토리북',
      brandImage: '/cat_negative.png',
      brandUrl: '/',
    },
  },
  backgrounds: {
    default: 'light',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: (props) => {
      const isDark = useDarkMode();

      const { id: storyId, storyById } = props.context;
      const {
        parameters: { docs = {} },
      } = storyById(storyId);
      docs.theme = isDark ? themes.dark : themes.light;

      return React.createElement(DocsContainer, props);
    },
    page: DocsPage,
  },
};
