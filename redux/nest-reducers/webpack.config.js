/**
 * @file   webpack config for production env
 * @author Yuan Yanjun
 * @date   2017-4-17
 */
const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const STATIC_PATH = './';
const BUILD_PATH = path.resolve('./build', ROOT_PATH);

// default port
const PORT = 8011;

module.exports = () => {
    // webpack config
    const config = {
        entry: {
            'babel-polyfill': ['babel-polyfill'],
            'main': [
                // bundle the client for webpack-dev-server
                // and connect to the provided endpoint
                // `webpack-dev-server/client?http://0.0.0.0:${PORT}`,

                path.resolve(STATIC_PATH, 'index.js')
            ]
        },
        output: {
            path: BUILD_PATH,
            publicPath: '/',
            filename: '[name].js'
        },
        devtool: 'cheap-module-eval-source-map',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader'
                }
            ]
        },
        resolve: {
            alias: {
            }
        },
        plugins: [
        ],
        devServer: {
            contentBase: BUILD_PATH,
            port: PORT,
            host: '0.0.0.0',
            compress: true,
            historyApiFallback: true,
            setup(app) {
            }
        }
    };
    return config;
};
