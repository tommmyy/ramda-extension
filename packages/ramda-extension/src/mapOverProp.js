import { identity, lensProp, useWith } from 'ramda';
import mapOver from './mapOver';

/**
 * Maps over a specific prop on a list of objects, it returns a new list of objects
 *
 * @func
 * @category List
 *
 * @param {string} prop The prop to be modified.
 * @param {Function} fn The function to be called on every specified property element of the `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 *
 * @example
 *
 *		const objs = [
 *			{ value: 1 },
 *			{ value: 2 },
 *		];
 *		const valueLens = R.lensProp("value");
 *		R_.mapOverProp("value", R.add(100), objs) // [{ value: 101 }, { value: 102 }]
 *
 * @sig string -> (* -> *) -> [object] -> [object]
 */
const mapOverProp = useWith(mapOver, [lensProp, identity, identity]);

export default mapOverProp;
