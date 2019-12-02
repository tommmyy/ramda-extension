import {binary, compose, map, over, uncurryN} from 'ramda';

/**
 * Maps over a specific property on a list of objects, it returns a new list of objects
 *
 * @func
 * @category List
 *
 * @param {Lens} lens
 * @param {Function} fn The function to be called on every specified property element of the `list`.
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
 *		const valueLens = R.lensProp("value");
 *		R_.mapOver(valueLens, R.add(100), objs) // [{ value: 101 }, { value: 102 }, { value: 103 }]
 *
 * @sig Lens s a -> (* -> *) -> [object] -> [object]
 */
const mapOver = uncurryN(3, compose(map, binary(over)));

export default mapOver;
