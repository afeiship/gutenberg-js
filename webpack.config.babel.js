const { resolve, join } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { NODE_ENV } = process.env;
const extractCSS = new ExtractTextPlugin('./css/gutenberg.css');
const relativeDir = {
  dist: resolve(__dirname, 'dist')
};

module.exports = function() {
  return {
    mode: NODE_ENV,
    entry: {
      gutenberg: ['./src/index.js']
    },
    output: {
      path: relativeDir.dist
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [/src/, /node_modules\/@wordpress/],
          loader: 'babel-loader'
        },
        {
          test: /\.(scss|sass)$/i,
          use: extractCSS.extract({
            fallback: 'style-loader', // creates style nodes from JS strings
            use: [
              { loader: 'css-loader' }, // translates CSS into CommonJS
              { loader: 'sass-loader' } // compiles Sass to CSS
            ]
          })
        }
      ]
    },
    plugins: [
      extractCSS,
      new CleanWebpackPlugin(['dist/*']),
      new HtmlWebpackPlugin({ template: './public/index.ejs' })
    ],
    externals: [
      {
        react: 'React',
        'react-dom': 'ReactDOM',
        moment: 'moment',
        jquery: 'jQuery'
      },
      function(context, request, callback) {
        if (/^@wordpress/.test(request)) {
          return callback(null, 'commonjs ' + request);
        }
        callback();
      }
    ],
    devServer: {
      host: '0.0.0.0',
      noInfo: false,
      contentBase: relativeDir.dist,
      compress: false,
      port: 9000
    }
  };
};
