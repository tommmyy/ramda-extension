import { equals } from 'ramda';

/**
 * Testing if argument equals to true
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is true
 *
 * @example
 *
 *        R_.equalsToTrue(true)	// true
 *        R_.equalsToTrue(false)	// false
 *
 * @sig a -> Boolean
 */
const equalsToTrue = equals(true);

export default equalsToTrue;
