module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@hail2u/css-mqpacker')({
      sort: true
    }),
    // 'postcss-import': {},
    // 'postcss-preset-env': {},
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}