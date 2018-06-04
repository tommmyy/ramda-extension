import { equals } from 'ramda';

/**
 * Testing if argument equals to false
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is false
 *
 * @example
 *
 *        R_.equalsToFalse(false)	// true
 *        R_.equalsToFalse(null)	// false
 *
 * @sig a -> Boolean
 */
const equalsToFalse = equals(false);

export default equalsToFalse;
