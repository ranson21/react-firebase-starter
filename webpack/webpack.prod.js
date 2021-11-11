const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const ENV = 'production';

module.exports = options =>
  webpackMerge(commonConfig({ env: ENV }), {
    mode: ENV,
    devtool: 'source-map',
    entry: {
      main: './src/app/index.jsx',
      vendors: ['react'],
    },
    output: {
      path: path.resolve(__dirname, '..', 'build'),
      publicPath: '/',
      filename: 'app/[name][hash].bundle.js',
      chunkFilename: 'app/[name][hash].chunk.js',
    },
    optimization: {
      splitChunks: {
        minSize: 0,
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: -20,
          },
          // common chunk
          default: {
            name: 'common',
            minChunks: 2,
            chunks: 'async',
            priority: -10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
      namedModules: false,
      namedChunks: false,
      nodeEnv: 'production',
      flagIncludedChunks: true,
      occurrenceOrder: true,
      sideEffects: true,
      usedExports: true,
      concatenateModules: true,
      noEmitOnErrors: true,
      checkWasmTypes: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          terserOptions: {
            ecma: 5,
            warnings: false,
            module: true,
            ie8: false,
            keep_fnames: false,
            safari10: false,
          },
        }),
      ],
    },
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  });
