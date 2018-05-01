const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    minimize: {
                        safe: true
                    }
                }
            },
            {
                loader: "sass-loader",
                options: {}
            }
        ]
      },
    ]
  },
  devServer: {
   historyApiFallback: true,
 },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new HtmlWebpackPlugin({
       template: 'html-loader!src/index.html'
   })
  ],
}
