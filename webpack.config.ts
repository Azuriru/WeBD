const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './js/pages/index.js',
    designer: './js/pages/designer.js',
    developers: './js/pages/developers.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'static', 'js'),
    filename: '[name].js'
  }
};