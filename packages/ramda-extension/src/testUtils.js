import { always, cond, T, unary } from 'ramda';
import isFunction from './isFunction';

export const formatJSVal = cond([
	[(x) => x === null, always('null')],
	[isFunction, always('function')],
	[T, unary(JSON.stringify)],
]);
