import { equals } from 'ramda';


/**
 * Returns true if argument equals 0.
 *
 * @category Math
 *
 * @example
 *
 * 		isNegative(3) // false
 * 		equalsZero(0) // true
 * 		isNegative(-3) // false
 *
 * @sig Number -> Boolean
 */
export default equals(0);
