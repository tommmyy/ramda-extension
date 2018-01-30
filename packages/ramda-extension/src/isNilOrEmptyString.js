import { anyPass, isNil } from 'ramda';
import equalsEmptyString from './equalsEmptyString';

/**
 * Returns true if argument is null, undefined or ''.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 * 		R_.isNilOrEmptyString(null) // true
 * 		R_.isNilOrEmptyString(undefined) // true
 * 		R_.isNilOrEmptyString('') // true
 * 		R_.isNilOrEmptyString(false) // false
 * 		R_.isNilOrEmptyString(0) // false
 * 		R_.isNilOrEmptyString([]) // false
 * 		R_.isNilOrEmptyString({}) // false
 *
 * @sig a -> Boolean
 */
const isNilOrEmptyString = anyPass([isNil, equalsEmptyString]);

export default isNilOrEmptyString;
