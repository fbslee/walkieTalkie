// webpack config goes here.
var webpack = require('webpack')
var path = require('path')
// webpack config goes here.
var webpack = require('webpack')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

// Paths for compiling / bundling
var SRC_DIR = path.resolve(__dirname, 'app/src')
var PUBLIC_DIR = path.resolve(__dirname, 'app/public')
var BUILD_DIR = path.resolve(__dirname, 'app/build')

// Webpack config
var config = {
    entry:path.resolve(SRC_DIR, 'main.js'),
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
        resolve:{
        alias: {
            "ag-grid-root" : __dirname + "/node_modules/ag-grid"
        }
    },
    devServer: {
        contentBase: BUILD_DIR,
    },
    watch : true,
    module: {
        loaders: [
            {
                loader: 'react-hot',
                test: SRC_DIR,
            },
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: SRC_DIR,
                query: {
                presets: ['es2015', 'react', 'stage-2'],
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
    new CopyWebpackPlugin([{
      from: PUBLIC_DIR
    } // to: output.path
    ]),
    new webpack.NoErrorsPlugin()
  ],
  stats: {

    colors: true
  },

  devtool: 'eval'
}

module.exports = config

