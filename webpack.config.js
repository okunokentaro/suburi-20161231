module.exports = {
  entry: {
    bundle: './index.js'
  },
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
