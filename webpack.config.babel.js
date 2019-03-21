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
      '@wordpress/hooks',
      '@wordpress/i18n',
      '@wordpress/url',
      '@wordpress/api-fetch',
      '@wordpress/autop',
      '@wordpress/blob',
      '@wordpress/block-serialization-default-parser',
      '@wordpress/escape-html',
      '@wordpress/element',
      '@wordpress/is-shallow-equal',
      '@wordpress/compose',
      '@wordpress/redux-routine',
      '@wordpress/dom',
      '@wordpress/html-entities',
      '@wordpress/shortcode',
      '@wordpress/blocks',
      '@wordpress/keycodes',
      '@wordpress/rich-text',
      '@wordpress/components',
      '@wordpress/core-data',
      '@wordpress/date',
      '@wordpress/notices',
      '@wordpress/nux',
      '@wordpress/token-list',
      '@wordpress/viewport',
      '@wordpress/wordcount',
      '@wordpress/block-library',
      '@wordpress/plugins',
      '@wordpress/format-library',
      '@wordpress/a11y',
      '@wordpress/data',
      '@wordpress/edit-post'
    ]
  };
};
