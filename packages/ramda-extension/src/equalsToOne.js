import { equals } from 'ramda';

/**
 * Returns true if argument equals to 0.
 *
 * @func
 * @category Relation
 *
 * @example
 *
 *        R_.equalsToOne(3)	// false
 *        R_.equalsToOne(0)	// true
 *        R_.equalsToOne(-3)	// false
 *
 * @sig any -> Boolean
 */
const equalsToOne = equals(1);

export default equalsToOne;
