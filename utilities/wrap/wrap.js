/**
 * Wrap for error handling
 * Exceptions are managed by
 * "next" middleware
 */
const wrap = fn => (...args) => fn(...args).catch(args[2]);
module.exports = wrap;