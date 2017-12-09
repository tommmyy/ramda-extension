import { is } from 'ramda';

/**
 * Returns true if argument is type of String.
 *
 * @func
 * @category Type
 *
 * @example
 *
 * 		R_.isObject({}) // false
 * 		R_.isObject([]) // false
 * 		R_.isObject('') // true

 * @sig a -> Boolean
 *
 */
const isString = is(String);

export default isString;
