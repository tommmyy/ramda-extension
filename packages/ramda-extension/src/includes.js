import flipIncludes from './flipIncludes';

/**
 * Returns `true` if if `list` includes `item`.
 *
 * Deprecated due to breaking change in Ramda. Use `R_.flipIncludes` instead.
 *
 * @func
 * @category List
 *
 * @param {Array} list
 * @param {any} item
 * @return {Boolean} Returns `true` if `list` includes `item`.
 * @deprecated
 *
 * @example
 *
 *    R_.includes(['e', 'f'], 'e') // true
 *    R_.includes(['a', 'f'], 'a') // false
 *
 * @sig [a] -> b -> Boolean
 */
const includes = flipIncludes;

export default includes;
