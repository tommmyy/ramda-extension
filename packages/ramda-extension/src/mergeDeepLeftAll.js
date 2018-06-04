import { reduce, mergeDeepLeft } from 'ramda';

/**
 * Returns deeply merged object by merging all objects in a passed list. Merging is applied from the left.
 * See mergeDeepLeft from Ramda.
 *
 * @func
 * @category Function
 *
 * @param {array} list Array of objects
 * @returns {object} Merged object
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
