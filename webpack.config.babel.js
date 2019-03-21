import webpack from 'webpack';
import { resolve } from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const { NODE_ENV } = process.env;

console.log(resolve(__dirname, 'dist'));

export default {
  mode: NODE_ENV,
  entry: {
    'gutenberg-js': './src/index.js'
  },
  output: {
    path: resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.ejs' })
  ]
};
