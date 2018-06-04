import { equals } from 'ramda';

/**
 * Returns true if argument equals to 1.
 *
 * @func
 * @category Relation
 *
 * @example
 *
 *        R_.equalsToZero(3)	// false
 *        R_.equalsToZero(1)	// true
 *        R_.equalsToZero(-3)	// false
 *
 * @sig any -> Boolean
 */
const equalsToZero = equals(0);

export default equalsToZero;
