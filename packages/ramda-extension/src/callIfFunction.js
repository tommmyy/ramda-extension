import { call, ifElse } from 'ramda';

import isFunction from './isFunction';
import headArg from './headArg';

/**
 * If the first argument `x` is a function then we return the result of calling `x` with the remaining arguments.
 * If `x` is not a function then we return it as it is.
 *
 * @func
 * @category Function
 *
 * @param {any} x 	Function or value
 * @param {*} args 	Any number of positional arguments.
 * @returns {any}
 *
 * @example
 * 		const ref = { current: null };
 * 		const getRef = always(ref);
 * 		const createRef = (current) => ({ current });
 *
 * 		R_.callIfFunction(ref); // { current: null }
 * 		R_.callIfFunction(getRef); // { current: null }
 * 		R_.callIfFunction(createRef, document.body); // {"current": [object HTMLBodyElement]}
 *
 * @sig (a|(*... -> a),*...) -> a
 */
const callIfFunction = ifElse(isFunction, call, headArg);

export default callIfFunction;
