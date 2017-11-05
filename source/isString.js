import { is } from 'ramda';

/**
 * Returns true if argument is type of String.
 *
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
export default is(String);
