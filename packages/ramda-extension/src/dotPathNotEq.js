import { complement } from 'ramda';
import dotPathEq from './dotPathEq';

/**
 * Determines whether a dot path on an object has a specific value
 * in `R_.notEqual` terms.
 *
 * @func
 * @category Object
 * @param {any} eq Value for `R_.notEqual`.
 * @param {String} path The dot path to use.
 * @param {Object} obj The object to retrieve the nested property from and compare with `eq`.
 * @return {*} True if value on dot path equals to `eq`.
 *
 * @example
 *
 *      R_.dotPathNotEq(2, 'a.b', {a: {b: 2}}); //=> false
 *      R_.dotPathNotEq(2, 'a.b', {c: {b: 2}}); //=> true
 *
 * @sig a -> String -> {a} -> Boolean
 *
 */
const dotPathNotEq = complement(dotPathEq);

export default dotPathNotEq;
