const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PublicPath = '../../../public/';
const plugins = [];
plugins.push(new MiniCssExtractPlugin({
  filename: `${PublicPath}, bundle.css`,
}));
module.exports = {
  plugins: [],
  output: {
    path: __dirname,
    filename: `${PublicPath}, bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash:12].[ext]',
              publicPath: `${PublicPath}, images/`,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};
