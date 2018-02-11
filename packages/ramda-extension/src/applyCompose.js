import { apply, compose } from 'ramda';

/**
 * Applies array of functions into compose. Use this instead of array destructor.
 *
 * @func
 * @category Function
 *
 * @param {Array} Functions that will be applied to compose
 * @return {*} result The result, equivalent to `compose(...[func])`
 * @example
 *
 *		const modifier = applyCompose([
 *			assoc('a', 1),
 *			assoc('c', 3),
 *			dissoc('b'),
 *		]);
 *		modifier({ b: 2, d: 4 }) // { a: 1, c: 3, d: 4 }
 *
 * @sig [(a -> b), (b -> c), ..., (y -> z)] -> (a -> z)
 */
const applyCompose = apply(compose);

export default applyCompose;
