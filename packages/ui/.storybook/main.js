const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
    "@storybook/addon-a11y",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    config.define.global = "window";

    // config.plugins.push(
    //   /** @see https://github.com/aleclarson/vite-tsconfig-paths */
    //   tsconfigPaths({
    //     // My tsconfig.json isn't simply in viteConfig.root,
    //     // so I've passed an explicit path to it:
    //     projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
    //   })
    // );

    config.resolve = {
      alias: [
        {
          find: "~ui",
          replacement: path.resolve(__dirname, "../components"),
        },
      ],
    };

    return config;
  },
};
