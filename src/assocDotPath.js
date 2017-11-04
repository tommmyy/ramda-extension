import { curryN, assocPath, compose, apply } from 'ramda';
import splitByDoth from './splitByDot';
import argumentsToList from './argumentsToList';
import overHead from './overHead';

/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path.
 *
 * @category Object
 * @param {String} path the dot path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @example
 *
 *      R_.assocDotPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocDotPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
export default curryN(2, compose(apply(assocPath), overHead(splitByDoth), argumentsToList));
