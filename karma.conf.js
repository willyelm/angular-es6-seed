'use strict'

module.exports = function (config) {
  var sourcePath = './app'
  config.set({
    basePath: '.',
    files: [
      'karma.shim.js'
    ],
    preprocessors: {
      'karma.shim.js': ['webpack']
    },
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      entry: {},
      output: {},
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
      }
    },
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-webpack'
    ]
  })
}
