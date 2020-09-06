const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { PATHS } = require('../paths');

exports.loader = ({ test = /\.css$/, options = {}, loaders = [] } = {}) => {
  return {
    module: {
      rules: [
        {
          test: test,
          use: [
            "style-loader",
            {
              loader: MiniCssExtractPlugin.loader,
              options
            },
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: {
                  path: './config/postcss.config.js'
                }
              }
            }
          ].concat(loaders),
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${PATHS.assets}css/[name].[contenthash].css`
      })
    ]
  };
};