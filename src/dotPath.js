import { curryN, path, compose, apply } from 'ramda';
import splitByDoth from './splitByDot';
import argumentsToList from './argumentsToList';
import overHead from './overHead';

/**
 * Retrieve the value at a given dot path.
 *
 * @category Object
 * @param {String} path The dot path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @example
 *
 *      R_.dotPath('a.b', {a: {b: 2}}); //=> 2
 *      R_.dotPath('a.b', {c: {b: 2}}); //=> undefined
 */
export default curryN(2, compose(apply(path), overHead(splitByDoth), argumentsToList));
