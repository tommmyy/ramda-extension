import { equals } from 'ramda';
import { emptyObject } from './internal/primitives';

/**
 * Testing if argument equals to empty object.
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is empty object.
 *
 * @example
 *
 *        R_.equalsToEmptyObject({})	// true
 *        R_.equalsToEmptyObject('')	// false
 *
 * @sig a -> Boolean
 */
const equalsToEmptyObject = equals(emptyObject);

export default equalsToEmptyObject;
