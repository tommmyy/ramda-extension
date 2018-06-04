import { complement } from 'ramda';
import equalsToTrue from './equalsToTrue';

/**
 * Returns true if value is not equal to true.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not true.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToTrue(true);   // false
 *        R_.notEqualToTrue(false);   // true
 *
 */
const notEqualToTrue = complement(equalsToTrue);

export default notEqualToTrue;
