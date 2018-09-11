import { is } from 'ramda';

/**
 * Returns true if value is type of Number.
 *
 * @func
 * @category Type
 *
 * @param {any} x Value to test
 * @return {any} True, if value is type of Number
 *
 * @example
 *
 *        R_.isNumber(NaN) // true
 *        R_.isNumber(Infinite) // true
 *        R_.isNumber(1) // true
 *        R_.isNumber(false) // false
 *        R_.isNumber({}) // false
 *        R_.isNumber("1") // false
 *
 * @sig a -> Boolean
 */
const isNumber = is(Number);

export default isNumber;
