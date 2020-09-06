const { VueLoaderPlugin } = require('vue-loader');

exports.loader = () => ({
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});