const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../server/static/funcBar')
  },
  resolve: {
    alias: {
      '@remotejs': resolve('../../dist/remote.js')
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
        exclude: /(node_modules|dist)/
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
  }
}