const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const context = path.resolve(__dirname, 'src');

const PROD = process.env.NODE_ENV === 'production';
const DEV = process.env.NODE_ENV === 'development';

const entry = PROD
  ? [ './src/index.jsx' ]
  : [
    './src/index.jsx',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ];

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('autoprefixer')()
    ]
  }
};

const plugins = PROD
  ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: false
    }),
    new ExtractTextPlugin('style-[contenthash:10].min.css'),
    new HTMLWebpackPlugin({
      template: 'config/template.html'
    })
  ]
  : [
      new webpack.HotModuleReplacementPlugin(),
    ];

  const sassResources = {
    loader: 'sass-resources-loader',
    options: {
      resources: [path.resolve(__dirname, '../src/styles/foundation/_variables.scss'), path.resolve(__dirname, '../src/styles/foundation/_utils.scss')],
    }
  };

const cssLoader = PROD
  ? ExtractTextPlugin.extract({
    use: [`css-loader?minimize=true`, postcss, 'sass-loader', sassResources],
    allChunks: true
  })
  : [
      'style-loader?sourceMap', 
      'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 
      postcss, 
      'sass-loader', 
      sassResources
    ];

module.exports = {
  devtool: PROD ? 'cheap-module-source-map' : 'eval',
  entry,
  plugins,
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: PROD ? 'bundle.[hash:12].min.js' : 'bundle.js'
  },
  performance: {
    hints: PROD ? 'warning' : false,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: ['style-loader?sourceMap', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'],
        exclude: '/node_modules/'
      },
      {
        test: /\.scss$/,
        use: cssLoader,
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: ['url-loader?limit=30000&name=images/[hash:12].[ext]'],
        exclude: '/node_modules/'
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['file-loader?name=assets/fonts/[name].[ext]'],
        exclude: /node_modules/,
      }
    ]
  }
}
