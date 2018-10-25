import { ifElse, apply } from 'ramda';

import isFunction from './isFunction';
import headArg from './headArg';

/**
 * If the first argument is a function then we apply the function with args that are passed as the second argument.
 * If the first argument is not a function then we return it as it is.
 *
 * @func
 * @category Function
 *
 * @param {any} x 	Function or value
 * @param {array} args 	Array of arguments
 * @returns {any}
 *
 * @example
 * 		const ref = { current: null };
 * 		const getRef = always(ref);
 * 		const createRef = (current) => ({ current });
 *
 * 		R_.applyIfFunction(ref, []); // { current: null }
 * 		R_.applyIfFunction(getRef, []); // { current: null }
 * 		R_.applyIfFunction(createRef, [document.body]); // {"current": [object HTMLBodyElement]}
 *
 * @sig a|(*... -> a) -> [*] -> a
 */
const applyIfFunction = ifElse(isFunction, apply, headArg);

export default applyIfFunction;
