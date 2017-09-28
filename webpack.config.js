var path = require('path');
module.exports = {
    entry: './script.jsx',//specify the react file
    output: {
        path: path.resolve(__dirname, ''),//specity the html file
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};