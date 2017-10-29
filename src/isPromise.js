import { allPass, o, prop } from 'ramda';
import isFunction from './isFunction';
import isObject from './isObject';

export default allPass([
	isObject,
	o(isFunction, prop('then')),
]);
