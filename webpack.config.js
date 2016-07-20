const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

var outputPath = path.resolve(__dirname, 'dist')
var sourcePath = path.resolve(__dirname, 'app')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProduction ? 'source-map' : 'eval',
  cache: true,
  entry: {
    'vendor': ['angular', 'angular-route', 'angular-mocks'],
    'app': path.join(sourcePath, 'app.js')
  },
  output: {
    path: outputPath,
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    root: [sourcePath],
    modules: [
      'node_modules',
      sourcePath
    ]
  },
  devServer: {
    progress: true,
    contentBase: outputPath,
    outputPath: outputPath
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity
    }),
    new CopyWebpackPlugin([{
      context: sourcePath,
      from: '**/*.{html,css}'
    }]),
    new webpack.NoErrorsPlugin()
  ]
}
