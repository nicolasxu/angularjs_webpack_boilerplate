'use strict';

var webpack = require('webpack'),
	path = require('path');

var inputBasePath  = __dirname + '/app';
var outputBasePath = path.resolve(__dirname, '..', './dist' );

module.exports = {
	// definition object goes here
	context: inputBasePath,
	entry: {
		app: ['webpack/hot/dev-server', './bootstrap.js']
	},
	output: {
		path: outputBasePath,
		filename: './bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{ test: /\.scss$/, loader: 'style!css!sass'},
			{ test: /\.html$/,  loader: 'raw' }
		]
	}

};