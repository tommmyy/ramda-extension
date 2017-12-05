import { lt } from 'ramda';


/**
 * Returns true if argument is greater than 0.
 * @func
 * @category Math
 *
 * @example
 *
 * 		isPositive(3) // true
 * 		isPositive(0) // false
 * 		isPositive(-3) // false
 *
 * @sig Number -> Boolean
 */
const isPositive = lt(0);
export default isPositive;
