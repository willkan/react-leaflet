/* eslint-disable */
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  output: {
    library: 'ReactLeaflet',
    libraryTarget: 'umd'
  },
  externals: [
    {
      leaflet: {
        amd: 'leaflet',
        commonjs: 'leaflet',
        commonjs2: 'leaflet',
        root: 'L'
      }
    },
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React'
      }
    },
    {
      'react-dom': {
        amd: 'react-dom',
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        root: 'ReactDOM'
      }
    },
    {
      'lodash': {
        amd: 'lodash',
        commonjs: 'lodash',
        commonjs2: 'lodash',
        root: '_'
      }
    }
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin()
  ]
};
