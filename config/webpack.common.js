const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { PATHS } = require('./paths');

const styles = require('./parts/styles');
const vue = require('./parts/vue');
const images = require('./parts/images');
const pages = require('./parts/pages');

module.exports = merge([
  {
    entry: {
      app: PATHS.src
    },
    output: {
      filename: `${PATHS.assets}js/[name].[contenthash].js`,
      path: PATHS.dist
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/'
        },
        {
          test: /\.(woff2|woff|ttf|eot)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: `${PATHS.assets}fonts`,
            }
          }
        }
      ]
    },
    resolve: {
      alias: {
        '~': PATHS.src,
        vue$: 'vue/dist/vue.js'
      }
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: `${PATHS.src}/${PATHS.assets}img`,
            to: `${PATHS.assets}img`
          },
          {
            from: `${PATHS.src}/static`,
            to: ''
          }
        ]
      })
    ]
  },
  images.loadImages(),
  images.loadSVG(),
  vue.loader(),
  styles.loader({
    test: /\.s[ac]ss$/i,
    loaders: [
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  }),
  styles.loader(),
  pages.loader()
]);