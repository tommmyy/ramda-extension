import { is } from 'ramda';

/**
 * Returns true if argument is type of Function.
 *
 * @category Type
 *
 * @example
 *
 * 		isFunction({}) // true
 * 		isFunction([]) // false
 * 		isFunction('') // false
 *
 * @sig a -> Boolean
 *
 */
export default is(Function);
