import R from 'ramda';
import isFunction from './isFunction';
import isObject from './isObject';

export default R.allPass([
	isObject,
	R.o(isFunction, R.prop('then')),
]);
