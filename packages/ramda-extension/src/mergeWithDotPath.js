import { converge, nthArg, call } from 'ramda';
import dotPath from './dotPath';
import assocDotPath from './assocDotPath';
import headArg from './headArg';
import lastArg from './lastArg';

const resolveDotPath = converge(dotPath, [headArg, lastArg]);
const performMerge = converge(call, [nthArg(1), resolveDotPath, nthArg(2)]);

/**
 * Merge data in object using custom merge fn.
 *
 * @func
 * @category Object
 *
 * @param {String} path The dot path to the value
 * @param {Function} mergeFn The merging function
 * @param {*} value Value to merge
 * @param {Object} obj The object to clone
 * @return {Object} A new object with merge data
 * @example
 *
 *      R_.mergeWithDotPath('a.b', R.mergeRight, { d: 30 }, {a: {b: { c: 20 }}}); //=> {a: {b: { c: 20, d: 30 }}}
 */
const mergeWithDotPath = converge(assocDotPath, [
	headArg,
	performMerge,
	lastArg,
]);

export default mergeWithDotPath;
