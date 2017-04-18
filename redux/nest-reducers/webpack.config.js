/**
 * @file webpack config
 * @author Yuan Yanjun
 */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './index.js',
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        contentBase: BUILD_PATH
    }
};
