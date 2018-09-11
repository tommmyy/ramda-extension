
import { flip, contains } from 'ramda';

/**
 * Returns `true` if if `list` includes `item`.
 *
 * @func
 * @category List
 *
 * @param {Array} list
 * @param {any} item
 * @return {Boolean} Returns `true` if `list` includes `item`.
 *
 * @example
 *
 *    R_.includes(['e', 'f'], 'e') // true
 *    R_.includes(['a', 'f'], 'a') // false
 *
 * @sig [a] -> b -> Boolean
 */
const includes = flip(contains);

export default includes;
