import { reduce, mergeDeepRight } from 'ramda';

/**
 * Returns result of first not nil evaluated functions in the list.
 * Undefined otherwise.
 *
 * @func
 * @category Function
 *
 * @example
 * 		const a = { fooA: { bar: 'a' }, shared: { baz: 1 } };
 * 		const b = { fooB: { bar: 'b' }, shared: { baz: 2 } };
 * 		const c = { fooC: { bar: 'c' }, shared: { baz: 3 } };
 *
 * 		R_.mergeDeepRightAll([a, b, c])
 * 		// {
 * 	 	// 	fooA: { bar: 'a' },
 * 		// 	fooB: { bar: 'b' },
 * 		// 	fooC: { bar: 'c' },
 * 		// 	shared: { baz: 3 },
 * 		// }
 *
 * @sig [a] -> a
 */
const mergeDeepRightAll = reduce(mergeDeepRight, {});

export default mergeDeepRightAll;
