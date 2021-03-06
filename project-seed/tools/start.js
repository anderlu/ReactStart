/**
 * User: Anderlu
 * Date: 15/10/28
 * Time: 上午1:21
 */
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import run from './run';

global.WATCH = true;
const webpackConfig = require('./webpack.config'); // Client-side bundle configuration
const bundler = webpack(webpackConfig);

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
async function start() {
    await run(require('./build'));
    console.log("_____________ end build");
    browserSync({
        server: {
            baseDir: 'build/app',

            middleware: [
                webpackDevMiddleware(bundler, {
                    // IMPORTANT: dev middleware can't access config, so we should
                    // provide publicPath by ourselves
                    publicPath: webpackConfig.output.publicPath,

                    // pretty colored output
                    stats: webpackConfig.stats

                    // for other settings see
                    // http://webpack.github.io/docs/webpack-dev-middleware.html
                }),

                // bundler should be the same as above
                webpackHotMiddleware(bundler)
            ]
        },


        /*proxy: {

            target: 'localhost:5000',

            middleware: [
                webpackDevMiddleware(bundler, {
                    // IMPORTANT: dev middleware can't access config, so we should
                    // provide publicPath by ourselves
                    publicPath: webpackConfig.output.publicPath,

                    // Pretty colored output
                    stats: webpackConfig.stats,

                    // For other settings see
                    // http://webpack.github.io/docs/webpack-dev-middleware.html
                }),

                // bundler should be the same as above
                webpackHotMiddleware(bundler)
            ],
        },*/

        // no need to watch '*.js' here, webpack will take care of it for us,
        // including full page reloads if HMR won't work
        files: [
            'build/app/**/*.css',
            'build/app/**/*.html',
            'build/content/**/*.*',
            'build/templates/**/*.*'
        ],
        browser:['Google Chrome']
    });
}

export default start;
