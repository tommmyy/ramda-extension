import { lt } from 'ramda';


/**
 * Returns true if argument is greater than 0.
 * @func
 * @category Math
 *
 * @example
 *
 * 		R_.isPositive(3) // true
 * 		R_.isPositive(0) // false
 * 		R_.isPositive(-3) // false
 *
 * @sig Number -> Boolean
 */
const isPositive = lt(0);
export default isPositive;
