import { anyPass, isNil } from 'ramda';
import equalsEmptyString from './equalsEmptyString';

/**
 * Returns true if argument is null, undefined or ''.
 *
 * @category Logic
 *
 * @example
 *
 * 		isNilOrEmptyString(null) // true
 * 		isNilOrEmptyString(undefined) // true
 * 		isNilOrEmptyString('') // true
 * 		isNilOrEmptyString(false) // false
 * 		isNilOrEmptyString(0) // false
 * 		isNilOrEmptyString([]) // false
 * 		isNilOrEmptyString({}) // false
 *
 * @sig a -> Boolean
 */
export default anyPass([isNil, equalsEmptyString]);
