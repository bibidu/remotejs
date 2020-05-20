const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'remotejs.js',
    path: path.join(__dirname, 'test/server/static/@bib1du')
  }
}