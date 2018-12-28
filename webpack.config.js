const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'asyncTimerMethods.js',
    library: 'asyncTimerMethods',
    libraryTarget: 'umd'
  }
}
