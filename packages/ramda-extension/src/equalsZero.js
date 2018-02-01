import { equals } from 'ramda';

/**
 * Returns true if argument equals 0.
 *
 * @func
 * @category Math
 *
 * @example
 *
 *        R_.equalsZero(3)	// false
 *        R_.equalsZero(0)	// true
 *        R_.equalsZero(-3)	// false
 *
 * @sig Number -> Boolean
 */
const equalsZero = equals(0);

export default equalsZero;
