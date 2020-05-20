const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist/basicApp.js')
  },
  resolve: {
    alias: {
      '@remotejs': resolve('../../dist/remote.js'),
      '@remoteConfig': resolve('./src/remote.json')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": {
                  "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                },
              }],
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-transform-runtime"],
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ['@babel/plugin-proposal-class-properties'],
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    port: 4000,
    hot: true,
    open: true,
  }
}