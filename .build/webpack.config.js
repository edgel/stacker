
///////////////////////////////////////////////////////////////////////////////
const sourceRoot = "./cache_sources";
///////////////////////////////////////////////////////////////////////////////

const HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: sourceRoot + '/index.html',
  favicon: sourceRoot + '/img/favicon.ico',
  filename: 'index.html',
  inject: true,
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  }
});

const ExtractPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractPlugin('bundle.css');
var scssExtractLoader = ExtractPlugin.extract({
  use: [ {
    loader: 'css-loader',
    options: { 
      modules: false,
      // localIdentName: '[local]-[hash:base64:6]', // [name]-[local]-[hash:base64:6]
      sourceMap: true, 
      minimize: { discardComments:{removeAll:true} }
    }
  }, {
    loader: 'sass-loader'
  }]
});

const SriPlugin = require('webpack-subresource-integrity');

const UglifyJsPlugin=require('uglifyjs-webpack-plugin');

const path = require('path');

module.exports = {
  entry: sourceRoot + '/index.jsx',
  output: {
    path: path.resolve('../out/'),
    filename: 'bundle.js',
    publicPath: '',
    crossOriginLoading: 'anonymous'
  },
  resolve: {
    extensions: [
      'htm','html',
      '.js','.jsx','.json','.yml','.yaml','.css','.scss',
      'ttf','eot','woff','woff2','jpeg','jpg','png','gif','svg','ico'
    ]
  },
  devtool: 'source-map',
  devServer: { disableHostCheck: true },
  module: {
    rules: [{ 
      test: /\.jsx$/, exclude: /node_modules/, use: { 
        loader: 'babel-loader'
      }
    },{
      test: /\.css$/, use: scssExtractLoader
    },{
      test: /\.scss$/, use: scssExtractLoader
    },{
      test: /\.(ttf|eot|woff|woff2|jpe?g|png|gif|svg|ico)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=1024&name=assets/[name].[ext]' // [hash]
    }]
  },
  plugins: [
    htmlWebpackPlugin, extractPlugin, new SriPlugin({
      hashFuncNames: ['sha256', 'sha384', 'sha512']
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: { 
          compress: false
        },
        extractComments: true
      })
    ]
  }
}
