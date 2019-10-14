const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

exports.default = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname),
    filename: 'dist/index.js',
    sourceMapFilename: 'dist/index.js.map'
  },
  watchOptions: {
    poll: 250,
    ignored: /node_modules/,
  },  
  plugins: [
    new ProgressBarPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'reports/report.html',
      openAnalyzer: false,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),    
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [
            ['@babel/preset-env', {
              targets: {
                browsers: ['last 2 versions', 'not safari < 11', 'not ie < 11'],
              },
            }],
            '@babel/preset-react']          
        },
      }      
    ],
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'prop-types': 'commonjs prop-types',
  }
};