import { equals } from 'ramda';


/**
 * Returns true if argument equals 0.
 * @func
 * @category Math
 *
 * @example
 *
 * 		equalsZero(3) // false
 * 		equalsZero(0) // true
 * 		equalsZero(-3) // false
 *
 * @sig Number -> Boolean
 */
const equalsZero = equals(0);
export default equalsZero;
