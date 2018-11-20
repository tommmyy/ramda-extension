import notFlipInclude from './notFlipInclude';

/**
 * Returns `false` if any of the items from `list` flipIncludes `item`.
 *
 * Deprecated due to breaking change in Ramda. Use `R_.notFlipInclude`.
 *
 * @func
 * @category List
 *
 * @param {Array} list
 * @param {any} item
 * @return {Boolean} Returns `false` if `list` flipIncludes `item`.
 * @deprecated
 *
 * @example
 *
 *    R_.notInclude(['e', 'f'], 'e') // false
 *    R_.notInclude(['a', 'f'], 'a') // true
 *
 * @sig [a] -> b -> Boolean
 */
const notInclude = notFlipInclude;

export default notInclude;
