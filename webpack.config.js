const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const config = {

  // dev server
  devServer: {
    historyApiFallback: true,
    publicPath: "/",
    contentBase: "./"
  },

  // entry
  entry: './client/index.js',

  // output
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  // loaders/rules
  module: {
    rules: [

      // javascript
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },

      { test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader' },
      
      // sass
      { test: /\.scss$/, use: "sass-loader" },
      
      // css
      { test: /\.css$/, use: "css-loader" },

      // handlebars
      { test: /\.handlebars$/, use: "handlebars-loader" }
    
    ]
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   output: { comments: false },
    //   mangle: false,
    //   sourcemap: true,
    //   minimize: true,
    //   mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] },
    // })
  ]
}

// export
module.exports = config;