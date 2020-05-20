const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'remote.js',
    // path: path.join(__dirname, 'dist/remote.js')
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": {
                  "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                },
              }],
            ],
            plugins: [
              ["@babel/plugin-transform-runtime"],
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}