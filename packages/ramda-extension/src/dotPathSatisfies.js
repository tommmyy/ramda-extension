import { pathSatisfies, identity, useWith } from 'ramda';
import splitByDoth from './splitByDot';

/**
 * Returns `true` if the specified object property at given dot path satisfies the given predicate; false otherwise.
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
 *		R_.dotPathSatisfies((y) => y > 0, 'a.b', { a: { b: 1 } }); // true
 *		R_.dotPathSatisfies((y) => y > 0, 'a.b', { a: { b: -1 } }); // false
 *		R_.dotPathSatisfies((y) => y > 0, 'a.b', { a: { c: 1 } }); // false
 *
 * @sig (a -> Boolean) → String → {a} → Boolean
 *
 */
const dotPathSatisfies = useWith(pathSatisfies, [
	identity,
	splitByDoth,
	identity,
]);

export default dotPathSatisfies;
