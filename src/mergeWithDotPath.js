import { curry } from 'ramda';
import dotPath from './dotPath';
import assocDotPath from './assocDotPath';

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
 *      R_.mergeWithDotPath('a.b', R.merge, { d: 30 }, {a: {b: { c: 20 }}}); //=> {a: {b: { c: 20, d: 30 }}}
 */
const mergeWithDotPath = curry((path, mergeFn, value, obj) => assocDotPath(
	path,
	mergeFn(dotPath(path, obj), value), obj)
);

export default mergeWithDotPath;
