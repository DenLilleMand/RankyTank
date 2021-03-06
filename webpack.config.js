var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: './app/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test:/\.(js|jsx)$/,
			loader:'babel'
		}, {
			test:/\.json$/,
			loaders:['json-loader']
		}, {
			test:/\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
		}, {
			test:/\.(png|jpg)$/,
			loader:'url?limit=25000'
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: "file"
		}, {
			test: /\.(woff|woff2)/,
			loader:"url?prefix=font/&limit=5000"
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/octet-stream"
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=image/svg+xml"
		}]
	},
	plugins: [
		new ExtractTextPlugin('main.css', {
			allChunks:true
		})
	]
};