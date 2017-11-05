import { is } from 'ramda';

/**
 * Returns true if argument is type of Object.
 *
 * @category Type
 *
 * @example
 *
 * 		isObject({}) // true
 * 		isObject([]) // true
 * 		isObject('') // false

 * @sig a -> Boolean
 */
export default is(Object);
