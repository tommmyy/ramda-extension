import { is } from 'ramda';

/**
 * Returns true if argument is type of String.
 *
 * @func
 * @category Type
 *
 * @example
 *
 * 		R_.isString({}) // false
 * 		R_.isString([]) // false
 * 		R_.isString('') // true
 *
 * @sig a -> Boolean
 */
const isString = is(String);

export default isString;
