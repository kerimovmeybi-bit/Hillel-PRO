const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './src/js/scripts.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

 module: {
  rules: [
    {
      test: /\.js$/,
      type: "javascript/auto"
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    }
  ]
},

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },

  devServer: {
    static: './dist',
    watchFiles: ['src/**/*'],
    open: true,
    port: 3000,
  },
};