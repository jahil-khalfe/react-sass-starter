var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

//NODE_ENV production

var config = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: [path.resolve(__dirname, "node_modules")],
				use: 'babel-loader'
			}, {
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		port: 3030,
		historyApiFallback: true

	},
	plugins: [new HtmlWebpackPlugin({ filename: "index.html", template: "app/index.html" })]
}

process.env.NODE_ENV === 'production' ?
		config.plugins.push(new webpack.DefinePlugin({ 'process.env' : { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV) }}),
		new webpack.optimize.UglifyJsPlugin()
		)
		: process.env.NODE_ENV

module.exports = config
