import { complement } from 'ramda';
import includes from './includes';

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
 *    R_.notInclude(['e', 'f'], 'e') // false
 *    R_.notInclude(['a', 'f'], 'a']) // true
 *
 * @sig [a] -> b -> Boolean
 */
const notInclude = complement(includes);

export default notInclude;
