module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: [
    '../../design-system/src/**/*.stories.mdx',
    '../../design-system/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../docs/**/*.stories.@(js|jsx|ts|tsx)',
    '../docs/**/*.stories.mdx'
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    '@storybook/addon-essentials'
  ],
  typescript: {
    reactDocgen: 'none'
  },
  features: {
    buildStoriesJson: true
  }
};
