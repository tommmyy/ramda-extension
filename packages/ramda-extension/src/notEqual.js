import { complement, equals } from 'ramda';

/**
 * Returns true if the arguments are not equal
 *
 * @func
 * @category Logic
 *
 * @sig a -> b -> Boolean
 *
 * @example
 *
 *        R_.notEqual(1, 2);   // true
 *        R_.notEqual(1, 1);   // false
 *
 *
 */
const notEqual = complement(equals);

export default notEqual;
