import { gt } from 'ramda';


/**
 * Returns true if argument is lower than 0.
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
export default gt(0);
