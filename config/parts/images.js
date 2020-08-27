const { PATHS } = require('../paths');

exports.loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: '[name].[ext]',
            outputPath: `${PATHS.assets}img`,
          }
        }
      }
    ]
  },
});

exports.loadSVG = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: `${PATHS.assets}img`,
          }
        }
      }
    ]
  },
});

