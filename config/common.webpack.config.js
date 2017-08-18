const webpack = require('webpack');
const constants = require('./const');

const config = {
    context: constants.context,
    entry: {
        bundle: './bundle.jsx'
    },
    output: {
        path: constants.output,
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
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
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    },
    plugins: []
};

module.exports = config;
