// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('autoprefixer')()
    ]
  }
};

  const sassResources = {
    loader: 'sass-resources-loader',
    options: {
      resources: [path.resolve(__dirname, '../src/styles/foundation/_variables.scss'), path.resolve(__dirname, '../src/styles/foundation/_utils.scss')],
    }
  };

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader?sourceMap', 
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 
          postcss, 
          'sass-loader', 
          sassResources
        ],
        exclude: '/node_modules/'
      },
    ],
  },
};
