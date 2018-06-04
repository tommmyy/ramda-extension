import { complement } from 'ramda';
import equalsToNull from './equalsToNull';

/**
 * Returns true if value is not equal to null.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not null.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToNull(null);   // false
 *        R_.notEqualToNull(false);   // true
 *
 */
const notEqualToNull = complement(equalsToNull);

export default notEqualToNull;
