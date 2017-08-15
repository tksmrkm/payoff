const webpack = require('webpack');
const constants = require('./const');

const config = {
    context: constants.context,
    entry: {
        bundle: './bundle.js'
    },
    output: {
        path: constants.output,
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015',
                    'react'
                ]
            }
        }]
    },
    plugins: []
};

module.exports = config;
