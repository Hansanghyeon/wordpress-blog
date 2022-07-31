const path = require('path');
const tsconfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../999ui/src/**/*.stories.mdx',
    '../../999ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-dark-mode',
    '@storybook/addon-essentials',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      allowSyntheticDefaultImports: false,
      esModuleInterop: false,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  async viteFinal(config) {
    config.define.global = 'window';

    // config.plugins.push(
    //   /** @see https://github.com/aleclarson/vite-tsconfig-paths */
    //   tsconfigPaths({
    //     // My tsconfig.json isn't simply in viteConfig.root,
    //     // so I've passed an explicit path to it:
    //     projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')]
    //   })
    // );

    config.resolve = {
      alias: [
        {
          find: '~sb',
          replacement: path.resolve(__dirname, '../src/components'),
        },
      ],
    };

    return config;
  },
};
