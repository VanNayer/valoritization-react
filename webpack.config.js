var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './app/assets/javascripts/matrix/main.js',
    output: {
      filename: 'matrix-dist.js',
      path: './vendor/assets/javascripts',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    }
}

process.env.BABEL_ENV = 'commonjs'

module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: ['babel'],
})
