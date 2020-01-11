const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
//dont need stories path if you have your stories inside your //components folder
module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH],
          use: [
            {
              loader: require.resolve('awesome-typescript-loader'),
              options: {
                configFileName: './tsconfig.json'
              }
            },
            { loader: require.resolve('react-docgen-typescript-loader') }
          ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@atom': path.resolve(__dirname, 'src/components/atoms'),
      '@molecule': path.resolve(__dirname, 'src/components/molecules'),
      '@organism': path.resolve(__dirname, 'src/components/organisms'),
      '@template': path.resolve(__dirname, 'src/components/templates'),
      '@utile': path.resolve(__dirname, 'src/utils'),
    },
  },
};
