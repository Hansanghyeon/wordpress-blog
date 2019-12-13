const path = require('path');
const HtmlWepbackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.tsx']
  },
  // Dev Server
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    noInfo: true,
    open: true,
    port: 30000,
  },
  plugins: [
    new HtmlWepbackPlugin({
      title: '4log',
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}