import { complement } from 'ramda';
import equalsToEmptyArray from './equalsToEmptyArray';

/**
 * Returns true if value is not equal to empty array.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not an empty array.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToEmptyArray([]);   // false
 *        R_.notEqualToEmptyArray([{ ramda: true }]);   // true
 *
 */
const notEqualToEmptyArray = complement(equalsToEmptyArray);

export default notEqualToEmptyArray;
