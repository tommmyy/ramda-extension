import {
	curry,
	keys,
	map,
	values,
	zipObj,
} from 'ramda';

/**
 * Use map function over the keys of the given object
 *
 * @category Object
 * @param {Function} fn The function to be called on every key of the input object.
 * @param {Array} obj The object to be iterated over.
 * @return {Array} The new object with mapped keys.
 * @example
 *
 *      R_.mapKeys(R_.toUpperFirst, {x: 1, y: 2, z: 3}); //=> {X: 2, Y: 4, Z: 6}
 */

export default curry((fn, obj) => zipObj(map(fn, keys(obj)), values(obj)));
