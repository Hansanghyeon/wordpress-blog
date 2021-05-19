const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (
    config,
    {
      // buildId, dev, isServer, defaultLoaders,
      webpack,
    },
  ) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    );
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
};
