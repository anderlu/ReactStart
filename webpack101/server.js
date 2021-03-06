/**
 * User: Anderlu
 * Date: 15/9/8
 * Time: 下午3:17
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = 8080;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    stats:{colors: true},
    historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
        if (err) console.log(err);
        console.log('Listening at localhost:'+ port);
    });