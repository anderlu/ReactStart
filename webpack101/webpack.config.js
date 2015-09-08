/**
 * User: Anderlu
 * Date: 15/9/1
 * Time: 下午3:47
 */
var path = require("path");
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server',
        './src/components/TodoApp/TodoApp.js'
    ], //演示单入口文件
    output: {
        path: path.join(__dirname,'build'),  //打包输出的路径
        filename: 'bundle.js',              //打包后的名字
        publicPath: "/build/"                //html引用路径，在这里是本地地址。
        //publicPath: "http://localhost:8080/"                //html引用路径，在这里是本地地址。
    },
    resolve:{
      extensions:['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'react-hot!babel?stage=0',
                include: [path.join(__dirname, 'src')]
            }, {
                test: /\.jsx$/,
                loader: 'react-hot!jsx?harmony',
                include: [path.join(__dirname, 'src')]
            }
        ]
    },
    plugins: [
        //commonsPlugin
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};