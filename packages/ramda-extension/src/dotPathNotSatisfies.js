import { complement } from 'ramda';
import dotPathSatisfies from './dotPathSatisfies';


/**
 * Returns `true` if the specified object property at given dot path not satisfies the given predicate; false otherwise.
 *
 * @func
 * @category Object
 *
 * @param {Function} predicate
 * @param {String} path The dot path to use.
 * @param {Object} obj
 *
 * @return {Boolean}
 *
 * @example
 *
 *		R_.dotPathNotSatisfies((y) => y > 0, 'a.b', { a: { b: 1 } }); // false
 *		R_.dotPathNotSatisfies((y) => y > 0, 'a.b', { a: { b: -1 } }); // true
 *		R_.dotPathNotSatisfies((y) => y > 0, 'a.b', { a: { c: 1 } }); // true
 *
 * @sig (a -> Boolean) → String → {a} → Boolean
 *
 */
const dotPathNotSatisfies = complement(dotPathSatisfies);

export default dotPathNotSatisfies;
