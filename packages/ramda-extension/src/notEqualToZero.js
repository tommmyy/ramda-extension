import { complement } from 'ramda';
import equalsToZero from './equalsToZero';

/**
 * Returns true if value is not equal to zero.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not zero.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToZero(0);   // false
 *        R_.notEqualToZero(1);   // true
 *
 */
const notEqualToZero = complement(equalsToZero);

export default notEqualToZero;
