const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    );

    return config;
  },
};
