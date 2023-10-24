const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_DEV,
  // This property defines where the application starts
  entry: './client/index.js',

  // Define the filepath and file name used for deploying
  // the bundled file
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  // Setup loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '...'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    proxy: { '/': 'http://localhost:3000' },
    static: {
      directory: path.join(__dirname, 'build'),
    },
  },
  devtool: 'eval-source-map',
};
