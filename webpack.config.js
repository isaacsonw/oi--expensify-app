const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {
  const isProduction = env === 'production'

  return {
    mode: 'none',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      })
    ],
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options:{
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options:{
              sourceMap: true
            }
          },

        ]
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader?name=images/[name].[ext]'
      }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}