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
 *    R_.flipIncludes(['e', 'f'], 'e') // true
 *    R_.flipIncludes(['a', 'f'], 'a') // false
 *
 * @sig [a] -> b -> Boolean
 */
const flipIncludes = flip(contains);

export default flipIncludes;
