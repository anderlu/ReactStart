/**
 * User: Anderlu
 * Date: 15/10/27
 * Time: 下午7:14
 */

import run from './run';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
    await run(require('./clean'));
    await run(require('./copy'));
    //await run(require('./bundle'));
}

export default build;