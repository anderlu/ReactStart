/**
 * User: Anderlu
 * Date: 15/10/27
 * Time: 下午5:53
 */
import path from 'path';
import webpack from 'webpack';
import bourbon from 'bourbon.includePaths';

//var bourbon = require("bourbon").includePaths;

const WATCH = global.WATCH === undefined ? false : global.WATCH;
const AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1',
];

/*
*
* Common configuration
*
* */
const config = {
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass?includePaths[]=" + bourbon
            },
            {
                test: /\.js$/,
                loader: 'react-hot!babel?stage=0',
                include: [path.join(__dirname, 'src')]
            },
            {
                test: /\.jsx$/,
                loader: 'react-hot!jsx?harmony',
                include: [path.join(__dirname, 'src')]
            }
        ]
    }
}

/*
* Configuration for the client-side bundle
* */




/*
*
 {
 test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
 loader: 'url-loader?limit=10000',
 }
*
* */