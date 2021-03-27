/**
 * Native and third party modules
 */
const path = require('path');
const entryPoint = require('require-main-filename')();

const root = path.dirname(entryPoint);

module.exports = root;