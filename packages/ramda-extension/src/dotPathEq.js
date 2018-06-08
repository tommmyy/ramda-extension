import { pathEq, identity, useWith } from 'ramda';
import splitByDoth from './splitByDot';


/**
 * Determines whether a dot path on an object has a specific value
 * in `R.equals` terms.
 *
 * @func
 * @category Object
 * @param {String} path The dot path to use.
 * @param {any} eq Value for `R.equals`.
 * @param {Object} obj The object to retrieve the nested property from and compare with `eq`.
 * @return {*} True if value on dot path equals to `eq`.
 *
 * @example
 *
 *      R_.dotPathEq('a.b', 2, {a: {b: 2}}); //=> true
 *      R_.dotPathEq('a.b', 2, {c: {b: 2}}); //=> false
 *
 * @sig String -> a -> {a} -> Boolean
 *
 */
const dotPathEq = useWith(pathEq, [splitByDoth, identity, identity]);

export default dotPathEq;
