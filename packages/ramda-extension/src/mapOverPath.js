import {identity, lensPath, useWith} from 'ramda';
import mapOver from './mapOver';


/**
 * Maps over a specific path on a list of objects, it returns a new list of objects
 *
 * @func
 * @category List
 *
 * @param {string[]} path The path to be modified.
 * @param {Function} fn The function to be called on every specified property element of the `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 *
 * @example
 *
 *		const objs = [
 *			{ value: { id: 1 } },
 *			{ value: { id: 2 } },
 *		];
 *		const valueLens = R.lensProp("value");
 *		R_.mapOver(["value", "id"], R.add(100), objs) // [{ value: { id: 101 } }, { value: { id: 102 } }]
 *
 * @sig (* -> *) -> string -> [object] -> [object]
 */
const mapOverProp = useWith(mapOver, [lensPath, identity, identity]);

export default mapOverProp;
