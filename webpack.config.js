var webpack = require('webpack')
var vue = require('vue-loader');
module.exports = {
  entry: './script/index.js',
  output: {
    path: './dist/',
    publicPath: '../dist/',
    filename: 'dist.js'
  },
  externals: {
    'vue': 'vue'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=100000&name=img/[hash:8].[name].[ext]'
    }, {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      }]
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
