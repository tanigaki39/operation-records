const path = require('path')
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: outputPath,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  devServer: {
    contentBase: outputPath,
    inline: true,
    hot: true,
    open: true,
  },
}
