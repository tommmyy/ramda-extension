import { is } from 'ramda';

/**
 * Returns true if argument is type of Function.
 * @func
 * @category Type
 *
 * @example
 *
 * 		isFunction(() => {}) // true
 * 		isFunction({}) // false
 * 		isFunction([]) // false
 * 		isFunction('') // false
 *
 * @sig a -> Boolean
 *
 */
const isFunction = is(Function);
export default isFunction;
