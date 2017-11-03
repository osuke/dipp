const webpack = require('webpack')

module.exports = { 
  entry: {
    app: './src/app'
  },  
  output: {
    path: __dirname + '/dist',
    filename: 'app.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('postcss-import'), require('csswring')]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    extensions: ['.js']
  },
  target: 'electron-renderer'
}
