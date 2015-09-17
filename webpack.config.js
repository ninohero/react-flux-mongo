var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: './index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: 'node_modules' },
      { test: /\.html$/, loader: 'raw', exclude: 'node_modules' },
      { test: /\.less$/, loader: 'style!css!less', exclude: 'node_modules' },
      { test: /\.css$/, loader: 'style!css', exclude: 'node_modules' },
      { test: /\.json$/, loader: 'json', exclude: 'node_modules' },
    ]
  }
};
