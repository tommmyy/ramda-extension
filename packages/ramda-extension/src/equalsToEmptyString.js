import { equals } from 'ramda';
import { emptyString } from './internal/primitives';

/**
 * Testing if argument equals to ''
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is empty string
 *
 * @example
 *
 *        R_.equalsToEmptyString('')	// true
 *        R_.equalsToEmptyString('hi')	// false
 *
 * @sig a -> Boolean
 */
const equalsToEmptyString = equals(emptyString);

export default equalsToEmptyString;
