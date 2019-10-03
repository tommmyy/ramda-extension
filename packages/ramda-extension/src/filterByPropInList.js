import {curry, filter, propSatisfies} from 'ramda';

/**
 * Given an array of primitives and an array of objects, it keeps all the
 * objects that have the specified prop included in the array
 *
 * @func
 * @category List
 *
 * @example
 *		const validKeys = ["A", "D"];
 *		const objs = [
 *			{ key: "A" },
 *			{ key: "B" },
 *			{ key: "E" },
 *		];
 *
 *  	R_.filterByPropInList(validKeys, "key", objs) // [{ key: "A" }]
 *
 * @sig [string] -> string -> [object] -> [object]
 *
 */
const filterByPropInList = curry((keys, prop, objs) => {
	const keySet = new Set(keys);
	return filter(propSatisfies((p) => keySet.has(p), prop), objs);
});

export default filterByPropInList;
