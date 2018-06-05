import { equals } from 'ramda';

/**
 * Returns true if argument equals to 1.
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is 0
 *
 * @example
 *
 *        R_.equalsToZero(3)	// false
 *        R_.equalsToZero(1)	// true
 *        R_.equalsToZero(-3)	// false
 *
 * @sig a -> Boolean
 */
const equalsToZero = equals(0);

export default equalsToZero;
