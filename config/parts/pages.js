const HtmlWebpackPlugin = require('html-webpack-plugin');

const { PATHS, PAGES_DIR } = require('../paths');

exports.loader = ({ title = 'Frontend-development', filename = 'index', chunks = [] } = {}) => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title,
        filename: `${filename}.html`,
        template: `${PAGES_DIR}/${filename}.html`,
        // scriptLoading: 'defer',
        favicon: `${PATHS.src}/static/favicon.ico`,
        meta: {
          charset: { charset: 'utf-8' },
          viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
        },
        chunks: ['vendors', 'app'].concat(chunks),
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: false,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          removeAttributeQuotes: true
        },
      })
    ]
  }
};
