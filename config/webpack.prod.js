const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")

const common = require('./webpack.common.js');

const { PATHS } = require('./paths')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['./fonts.css']
    }),
    new GoogleFontsPlugin({
      fonts: [
        {
          family: 'Montserrat',
          variants: ['700'],
          subsets: ['latin']
        },
        {
          family: 'Roboto',
          variants: ['400', '400italic', '700'],
          subsets: ['latin']
        }
      ],
      formats: ['woff2', 'woff', 'ttf', 'eot'],
      path: `${PATHS.assets}fonts`
  })
  ]
});
