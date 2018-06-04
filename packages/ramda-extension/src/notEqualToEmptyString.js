import { complement } from 'ramda';
import equalsToEmptyString from './equalsToEmptyString';

/**
 * Returns true if value is not equal to empty string.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not an empty string.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToEmptyString("");   // false
 *        R_.notEqualToEmptyString("Ramda");   // true
 *
 */
const notEqualToEmptyString = complement(equalsToEmptyString);

export default notEqualToEmptyString;
