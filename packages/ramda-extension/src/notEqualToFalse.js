import { complement } from 'ramda';
import equalsToFalse from './equalsToFalse';

/**
 * Returns true if value is not equal to false.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not false.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToFalse(false);   // false
 *        R_.notEqualToFalse(true);   // true
 *
 */
const notEqualToFalse = complement(equalsToFalse);

export default notEqualToFalse;
