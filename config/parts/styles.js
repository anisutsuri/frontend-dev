const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const { PATHS } = require('../paths');

exports.loader = ({ test = /\.css$/, options = {}, loaders = [] } = {}) => {
  options = Object.assign(options, {
    esModule: false
  });
  return {
    module: {
      rules: [
        {
          test,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  config: './postcss.config.js'
                },
                sourceMap: true
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

exports.styleLint = ({ options } = {}) => ({
  plugins: [
    new StylelintPlugin(options)
  ]
});
