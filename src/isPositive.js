import { lt } from 'ramda';


/**
 * Returns true if argument is greater than 0.
 *
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
export default lt(0);
