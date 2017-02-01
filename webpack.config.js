// webpack config goes here.
var webpack = require('webpack')
var path = require('path')
// webpack config goes here.
var webpack = require('webpack')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

// Paths for compiling / bundling
var app_dir = path.resolve(__dirname, 'app')
var bin_dir = path.resolve(__dirname, 'public/build')
var PUBLIC_DIR = path.resolve(__dirname, 'app/public')

// Webpack config
var config = {
    entry: app_dir + '/main.js',
    output: {
        path: bin_dir,
        filename: 'bundle.js'
    },
        resolve:{
        alias: {
            "ag-grid-root" : __dirname + "/node_modules/ag-grid"
        }
    },
    watch : true,
    module: {
        loaders: [
            {
                loader: 'react-hot',
                test: app_dir,
            },
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: app_dir,
                query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-class-properties"]
                },
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
  },
    plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {

    colors: true
  },

  devtool: 'eval'
}

module.exports = config

