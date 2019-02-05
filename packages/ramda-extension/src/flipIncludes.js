import { flip, includes } from 'ramda';

/**
 * Returns `true` if `list` includes `item`.
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
 *    R_.flipIncludes(['e', 'f'], 'a') // false
 *
 * @sig [a] -> b -> Boolean
 */
const flipIncludes = flip(includes);

export default flipIncludes;
