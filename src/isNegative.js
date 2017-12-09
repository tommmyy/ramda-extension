import { gt } from 'ramda';


/**
 * Returns true if argument is lower than 0.
 * @func
 * @category Math
 *
 * @example
 *
 * 		R_.isNegative(3) // false
 * 		R_.isNegative(0) // false
 * 		R_.isNegative(-3) // true
 *
 * @sig Number -> Boolean
 */
const isNegative = gt(0);
export default isNegative;
