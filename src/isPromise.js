import { allPass, o, prop } from 'ramda';
import isFunction from './isFunction';
import isObject from './isObject';

/**
 * Returns true if argument is Promise.
 *
 * @category Type
 *
 * @example
 *
 * 		isPromise(Promise.resolve()) // true
 *   	isPromise(0) // false
 *
 * @sig a -> Boolean
 *
 */
export default allPass([
	isObject,
	o(isFunction, prop('then')),
]);
