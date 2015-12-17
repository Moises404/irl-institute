var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    client: [
      path.join(__dirname, "src/client.js"),
    ],
  },

  module: {
    loaders: [
      {test: /\.js(x)?$/, loaders: ['babel'], exclude: /node_modules/},
      { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
      {test: /\.json$/, loaders: ['json']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')}
    ]
  },

  output: {
    chunkFilename: "[name].min.js",
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    filename: "[name].min.js",
    hotUpdateChunkFilename: "update/[hash]/[id].update.js",
    hotUpdateMainFilename: "update/[hash]/update.json",
    path: path.join(__dirname, "dist"),
    publicPath: "/",
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new ExtractTextPlugin('[name].css')
  ],

  target: "web",
};




