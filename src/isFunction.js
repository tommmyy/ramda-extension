import { is } from 'ramda';

/**
 * Returns true if argument is type of Function.
 *
 * @func
 * @category Type
 *
 * @example
 *
 * 		R_.isFunction(() => {}) // true
 * 		R_.isFunction({}) // false
 * 		R_.isFunction([]) // false
 * 		R_.isFunction('') // false
 * 		R_.isFunction(0) // false
 *
 * @sig a -> Boolean
 *
 */
const isFunction = is(Function);

export default isFunction;
