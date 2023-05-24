const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, { mode }) => {
  console.log({ mode });

  const isProduction = mode === 'production';

  const backendUrl = isProduction
    ? 'https://fierce-shelf-74800.herokuapp.com/api/notes'
    : 'http://localhost:3001/api/notes';

  return {
    entry: './src/main.jsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new Dotenv(),
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backendUrl)
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: 'body'
      })
    ],
    devServer: {
      open: true,
      overlay: true,
      compress: true,
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic'
                }
              ]
            ]
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[hash].[ext]'
              }
            }
          ]
        }
      ]
    }
  };
};
