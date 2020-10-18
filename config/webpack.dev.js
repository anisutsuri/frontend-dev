const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common.js');

const { PATHS } = require('./paths')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    // openPage: [ 'https://vk.com', 'https://youtube.com' ],
    // index: './index.html',
    contentBase: PATHS.dist,
    // inline: false,
    // compress: true,
    host: '192.168.0.101',
    port: 9000,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/${PATHS.assets}fonts`,
          to: `${PATHS.assets}fonts`
        }
      ]
    })
  ]
});
