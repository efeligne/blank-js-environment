const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const fileName = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { hmr: isDev, reloadAll: true },
    },
    'css-loader',
  ];
  if (extra) loaders.push(extra);
  return loaders;
};

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
      ],
    },
  }];
  if (isDev) loaders.push('eslint-loader');
  return loaders;
};

const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: fileName('css'),
    }),
    new HTMLPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      }],
    }),
  ];
  if (!isDev) base.push(new BundleAnalyzerPlugin());
  return base;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.js'],
  },
  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: { chunks: 'all' },
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: plugins(),
  devServer: { port: 4200, hot: isDev },
  devtool: isDev ? 'source-map' : false,
  module: {
    rules: [
      { test: /\.css$/, use: cssLoaders() },
      { test: /\.less$/, use: cssLoaders('less-loader') },
      { test: /\.s[ac]ss$/, use: cssLoaders('sass-loader') },
      { test: /\.(png|gif|svg|jpg)$/, use: ['file-loader'] },
      { test: /\.(ttf|woff|woff2|eot)$/, use: ['file-loader'] },
      { test: /\.xml$/, use: ['xml-loader'] },
      { test: /\.csv$/, use: ['csv-loader'] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
    ],
  },
};
