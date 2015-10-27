/**
 * User: Anderlu
 * Date: 15/10/27
 * Time: 下午5:53
 */
import path from 'path';
import webpack from 'webpack';
import bourbon from 'bourbon.includePaths';
import merge from 'lodash.merge';

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
    'Safari >= 7.1'
];
const GLOBALS = {
    'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
    __DEV__: DEBUG,
};
/*
*
* Common configuration
*
* */
const config = {
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
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

const appConfig = merge({}, config ,{
    entry: [
        ...(WATCH ? ['webpack-hot-middleware/client'] : []),
        './src/app/app.js',
    ],
    output: {
        path: path.join(__dirname, '../build/public'),
        filename: 'app.js',
    },
    devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
    plugins: [
        ...config.plugins,
        ...(WATCH ? [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
        ] : [])
    ],
    module: {
        loaders: [
            ...config.module.loaders
        ]
    }
});


/*
*
 {
 test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
 loader: 'url-loader?limit=10000',
 }
*
* */

export default appConfig;
