const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

let isDev = mode === 'development';

console.log(mode + ' mode');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: mode,
  entry: {
    main: ['./blocks/main/main.js'],
    pets: ['./blocks/pets/pets.js']
  },
  output: {
    filename: isDev ? 'pages/[name]/script.js' : 'pages/[name]/script.[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: '../js/chunks/'
    }
  },
  plugins: [

    new HtmlWebpackPlugin({
      filename: 'pages/main/index.html',
      template: './main.pug',
      inject: 'body',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/pets/index.html',
      template: './pets.pug',
      inject: 'body',
      chunks: ['pets']
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? 'pages/[name]/style.css' : 'pages/[name]/style.[contenthash].css'
    })
  ],
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env'
                ]
              ]
            }
          }
        },
        'sass-loader'
      ]
    },
    {
      test: /\.(svg|png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/images/[name][ext][query]'
      }
    },
    {
      test: /\.html$/i,
      loader: 'html-loader'
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: isDev ? 'assets/fonts/[name][ext][query]' : 'assets/fonts/[name].[contenthash][ext][query]'
      }
    },
    {
      test: /\.pug$/,
      use: [{
        loader: 'html-loader'
      },
      {
        loader: 'pug-html-loader',
        options: {
          pretty: true
        }
      }
      ],
      exclude: /(node_modules|bower_components)/
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /(\.ico)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/favicon/[contenthash][ext][query]'
      }
    },
    {
      test: /\.(webmanifest|json|manifest)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/favicon/[contenthash][ext][query]'
      }
    }
    ]
  },
  devServer: {
    open: '/pages/pets/',
    hot: true,
    port: 'auto'
  }
};
