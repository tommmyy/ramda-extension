import { equals } from 'ramda';
import { emptyArray } from './internal/primitives';

/**
 * Testing if argument equals to empty array.
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is empty array.
 *
 * @example
 *
 *        R_.equalsToEmptyArray([])	// true
 *        R_.equalsToEmptyArray([''])	// false
 *
 * @sig a -> Boolean
 */
const equalsToEmptyArray = equals(emptyArray);

export default equalsToEmptyArray;
