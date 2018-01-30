import { allPass, o, prop } from 'ramda';
import isFunction from './isFunction';
import isObject from './isObject';

/**
 * Returns true if argument is Promise.
 *
 * @func
 * @category Type
 *
 * @example
 *
 * 		R_.isPromise(Promise.resolve()) // true
 *   	R_.isPromise(0) // false
 *
 * @sig a -> Boolean
 *
 */
const isPromise = allPass([isObject, o(isFunction, prop('then'))]);

export default isPromise;
