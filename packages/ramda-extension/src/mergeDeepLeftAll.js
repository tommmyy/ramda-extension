import { reduce, mergeDeepLeft } from 'ramda';

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
 * 		R_.mergeDeepLeftAll([a, b, c])
 * 		// {
 * 	 	// 	fooA: { bar: 'a' },
 * 		// 	fooB: { bar: 'b' },
 * 		// 	fooC: { bar: 'c' },
 * 		// 	shared: { baz: 1 },
 * 		// }
 *
 * @sig [a] -> a
 */
const mergeDeepLeftAll = reduce(mergeDeepLeft, {});

export default mergeDeepLeftAll;
