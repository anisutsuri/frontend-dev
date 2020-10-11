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
      path: PATHS.dist,
      publicPath: '/'
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
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
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
        '@': PATHS.src,
        vue$: 'vue/dist/vue.js',
        vuex$: 'vuex/dist/vuex.js',
      }
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: `${PATHS.src}/static`,
            to: ''
          }
        ]
      })
    ]
  },
  images.loader(),
  vue.loader(),
  styles.loader({
    test: /\.s[ac]ss$/i,
    loaders: [
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          additionalData: `
            @import '@/${PATHS.assets}scss/utils/vars.scss';
            @import '@/${PATHS.assets}scss/utils/mixins.scss';
          `
        }
      }
    ]
  }),
  styles.loader(),
  pages.loader()
]);