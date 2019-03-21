import webpack from 'webpack';
import { resolve, join } from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const { NODE_ENV } = process.env;

export default {
  mode: NODE_ENV,
  entry: {
    'gutenberg-js': './src/index.js'
  },
  output: {
    path: resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.js']),
    new HtmlWebpackPlugin({ template: './public/index.ejs' })
  ],
  devServer: {
    host: '0.0.0.0',
    noInfo: false,
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};

