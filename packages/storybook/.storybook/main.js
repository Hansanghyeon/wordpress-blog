module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../../999ui/src/**/*.stories.mdx',
    '../../999ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../docs/**/*.stories.@(js|jsx|ts|tsx)',
    '../docs/**/*.stories.mdx',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    '@storybook/addon-essentials',
  ],
  typescript: {
    reactDocgen: 'none',
  },
  features: {
    buildStoriesJson: true,
  },
};
