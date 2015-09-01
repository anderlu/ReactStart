/**
 * User: Anderlu
 * Date: 15/9/1
 * Time: 下午3:47
 */
var path = require("path");
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: './src/components/App/App.js', //演示单入口文件
    output: {
        path: path.join(__dirname, 'build'),  //打包输出的路径
        filename: 'bundle.js',              //打包后的名字
        publicPath: "./build/"                //html引用路径，在这里是本地地址。
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony'
            }
        ]
    },
    plugins: [
        //commonsPlugin
    ]
};