import { pathOr, identity, useWith } from 'ramda';
import splitByDoth from './splitByDot';

/**
 * If the given, non-null object has a value at the given dot path,
 * returns the value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @category Object
 *
 * @param {any} default Default value if `path` does not exist.
 * @param {String} path The dot path to use.
 * @param {Object} obj
 *
 * @return {*}  The data at `path` of the supplied object or the default value.
 *
 * @example
 *
 *		R_.dotPathOr('N/A', 'a.b', { a: { b: 1 } }); // 1
 *		R_.dotPathOr('N/A', 'a.b', { a: { c: 1 } }); // "N/A"
 *
 * @sig a → String → {a} → a
 *
 */
const dotPathOr = useWith(pathOr, [identity, splitByDoth, identity]);

export default dotPathOr;
