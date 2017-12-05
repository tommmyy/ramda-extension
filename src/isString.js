import { is } from 'ramda';

/**
 * Returns true if argument is type of String.
 * @func
 * @category Type
 *
 * @example
 *
 * 		isObject({}) // false
 * 		isObject([]) // false
 * 		isObject('') // true

 * @sig a -> Boolean
 *
 */
const isString = is(String);
export default isString;
