const webpack = require('webpack');
const config = require('./common.webpack.config');

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    })
);

module.exports = config;
