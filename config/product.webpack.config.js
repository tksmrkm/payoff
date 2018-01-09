const webpack = require('webpack');
const config = require('./common.webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
);
config.plugins.push(
    new HtmlWebpackPlugin({
        title: 'PayOff',
        template: 'templates/index.html'
    })
);

module.exports = config;
