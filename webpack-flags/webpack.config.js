const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      //  "/.../" => regExp, "\." => an actual ".", $ => means the end of the string (nothing after)
      {test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/},
      {test: /\.css$/, loader: ['style-loader', 'css-loader']},
      {test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true, //(look for changes into js files and reload the browser)
    open: true, //(open the browser auto the first time)
    port: 8000,
    watchContentBase: true //Look for changes in static files (index.html)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
