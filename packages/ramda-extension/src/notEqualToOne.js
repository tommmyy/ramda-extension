import { complement } from 'ramda';
import equalsToOne from './equalsToOne';

/**
 * Returns true if value is not equal to number one.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not number one.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToOne(1);   // false
 *        R_.notEqualToOne(0);   // true
 *
 */
const notEqualToOne = complement(equalsToOne);

export default notEqualToOne;
