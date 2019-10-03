import {uncurryN, map, over, lensProp} from 'ramda';

/**
 * Maps over a specific property on a list of objects, it returns a new list of objects
 *
 * @func
 * @category List
 *
 * @param {Function} fn The function to be called on every specified property element of the `list`.
 * @param {string} prop The property to be modified.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 *
 * @example
 *
 *		const objs = [
 *			{ value: 1 },
 *			{ value: 2 },
 *			{ value: 3 },
 *		];
 *
 *		R_.mapOver(R.add(100), "value", objs) // [{ value: 101 }, { value: 102 }, { value: 103 }]
 *
 * @sig (* -> *) -> string -> [object] -> [object]
 */
const mapOver = uncurryN(3, (fn, prop) => map(over(lensProp(prop), fn)));

export default mapOver;
