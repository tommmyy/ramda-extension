import {curry, filter, propSatisfies} from 'ramda';

/**
 * Given an array of primitives and an array of objects, it keeps all the
 * objects that have the specified prop included in the array
 *
 * @func
 * @category List
 *
 * @param {string} prop Property to look for the inclusion in the list
 * @param {[any]} keys List of valid property values
 * @param {[Object]} objs List of objects to filter
 * @return {[Object]} List of objects with the valid property values
 *
 * @example
 *		const validKeys = ["A", "D"];
 *		const objs = [
 *			{ key: "A" },
 *			{ key: "B" },
 *			{ key: "E" },
 *		];
 *
 *  	R_.filterByPropInList("key", validKeys, objs) // [{ key: "A" }]
 *
 * @sig [string] -> string -> [object] -> [object]
 *
 */
const filterByPropInList = curry((prop, keys, objs) => {
	const keySet = new Set(keys);
	return filter(propSatisfies((p) => keySet.has(p), prop), objs);
});

export default filterByPropInList;
