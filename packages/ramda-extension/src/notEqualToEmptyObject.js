import { complement } from 'ramda';
import equalsToEmptyObject from './equalsToEmptyObject';

/**
 * Returns true if value is not equal to empty object.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not an empty object.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToEmptyObject({});   // false
 *        R_.notEqualToEmptyObject({ ramda: true });   // true
 *
 */
const notEqualToEmptyObject = complement(equalsToEmptyObject);

export default notEqualToEmptyObject;
