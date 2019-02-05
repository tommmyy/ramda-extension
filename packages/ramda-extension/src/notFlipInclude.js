import { complement } from 'ramda';
import flipIncludes from './flipIncludes';

/**
 * Returns `false` if any of the items from `list` includes `item`.
 *
 * @func
 * @category List
 *
 * @param {Array} list
 * @param {any} item
 * @return {Boolean} Returns `false` if `list` includes `item`.
 *
 * @example
 *
 *    R_.notFlipInclude(['e', 'f'], 'e') // false
 *    R_.notFlipInclude(['e', 'f'], 'a') // true
 *
 * @sig [a] -> b -> Boolean
 */
const notFlipInclude = complement(flipIncludes);

export default notFlipInclude;
