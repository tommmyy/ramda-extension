import { __, useWith, reduce, mergeDeepWith, identity } from 'ramda';

/**
 * Creates a new object with the own properties of the list of provided objects.
 * List of objects is reduced from first object to the last.
 * If a key exists in both compared objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @category Object
 *
 * @see mergeDeepLeftAll, mergeDeepRightAll, mergeDeepAllWithKey
 *
 * @param {Function} reducer - Function that resolves merging between two same keys
 * @param {Array} objects - Array of objects to be merged with
 * @return {Object} Returns merged object
 *
 * @example
 * 		R_.mergeDeepAllWith(R.concat, [
 * 			{ a: { b: [1] } },
 * 			{ a: { b: [2] } },
 * 			{ a: { b: [3] } },
 * 		])
 * 		// { a: { b: [1, 2, 3] } }
 *
 * @sig ((a, a) -> a) -> [{a}] -> {a}
 */

const mergeDeepAllWith = useWith(reduce(__, {}), [mergeDeepWith, identity]);

export default mergeDeepAllWith;
