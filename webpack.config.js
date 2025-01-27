const path = require('path');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';

  return {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/assets/',
    },
    mode: 'production',
    devtool: devMode && 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          exclude: /node_modules/,
          use: ['file-loader']
        }
      ]
    },
    devServer: {
      publicPath: '/dist',
      historyApiFallback: true
    }
  }
}