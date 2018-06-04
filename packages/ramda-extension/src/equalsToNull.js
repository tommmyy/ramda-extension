import { equals } from 'ramda';

/**
 * Testing if argument equals to null
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is null
 *
 * @example
 *
 *        R_.equalsToNull(null)	// true
 *        R_.equalsToNull(undefined)	// false
 *
 * @sig a -> Boolean
 */
const equalsToNull = equals(null);

export default equalsToNull;
