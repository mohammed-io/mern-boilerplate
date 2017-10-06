const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// abstract rules from config
const rules = [
  
  {
    test: /\.tsx?$/,
    use: ['react-hot-loader', 'awesome-typescript-loader']
  },

  // javascript
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [ 'babel-loader' ]
  },
  
  // sass
  { 
    test: /\.scss$/, 
    use: [ 'style-loader', 'css-loader', 'sass-loader' ] 
  },
  
  // css
  { 
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ]
  },
];


// webpack config
const config = {

  // entry
  entry: {
    client: './client/index.tsx',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux'
    ]
  },

  // output
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },

  // resolving ts files
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  // loaders/rules
  module: {
    rules: rules
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('application.scss'),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: true },
    //   output: { comments: false },
    //   mangle: false,
    //   sourcemap: true,
    //   minimize: true,
    //   mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] },
    // })
  ],

  // shared 
  devtool: "source-map",

  // dev server
  devServer: {
    historyApiFallback: true,
    publicPath: "/",
    contentBase: "./",
    hot: true
  }
};

// export
module.exports = config;