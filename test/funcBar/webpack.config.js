const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../server/static/funcBar')
  }
}