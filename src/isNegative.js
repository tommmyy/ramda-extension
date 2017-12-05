import { gt } from 'ramda';


/**
 * Returns true if argument is lower than 0.
 * @func
 * @category Math
 *
 * @example
 *
 * 		isNegative(3) // false
 * 		isNegative(0) // false
 * 		isNegative(-3) // true
 *
 * @sig Number -> Boolean
 */
const isNegative = gt(0);
export default isNegative;
