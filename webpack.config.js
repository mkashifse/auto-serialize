const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/dist/',
    },
    devServer: {
        contentBase: path.join(__dirname,'src'),
        publicPath:'/dist/',
        watchContentBase:true,
    },
    plugins:[
    ]
};