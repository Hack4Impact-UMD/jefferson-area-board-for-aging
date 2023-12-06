const path = require('path')

module.exports = {
  entry: './src/UserDashboardPage.tsx',
  output: {
    path: path.resolve(__dirname, 'UserDashboardPage'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true,
}