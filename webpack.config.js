global.Promise = require('bluebird');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path:       __dirname + '/public',
        publicPath: '/',
        filename: './js/bundle.js'

    },

    module: {
        loaders: [

            {
                test: /\.js$/,
                loader: "babel"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {


        contentBase: './public', // static files, cwd() by default
        hot: true,
        inline: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css', {
            allChunks: true
        })

    ]
    
};