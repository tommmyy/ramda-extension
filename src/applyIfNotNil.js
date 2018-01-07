import { apply, ifElse } from 'ramda';
import notNill from './notNil';
import alwaysNull from './alwaysNull';

/**
 * Call apply on function if the function is defined. Otherwise do nothing and return null.
 *
 * @func
 * @category Function
 *
 * @param {Function} fn The function which will be called with `args` when defined
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)` or null
 * @example
 *
 * 		const nums = [1, 2, 3];
 *		R_.applyIfNotNil(R.sum, nums) // 6
 *		R_.applyIfNotNil(undefined, nums) // null
 *
 * @sig (*... -> a) -> [*] -> a
 */
const applyIfNotNil = ifElse(notNill, apply, alwaysNull);

export default applyIfNotNil;
