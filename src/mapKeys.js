import {
	useWith,
	map,
	compose,
	fromPairs,
	toPairs,
} from 'ramda';
import overHead from './overHead';

/**
 * Use map function over the keys of the given object
 * @func
 * @category Object
 * @param {Function} fn The function to be called on every key of the input object.
 * @param {Array} obj The object to be iterated over.
 * @return {Array} The new object with mapped keys.
 * @example
 *
 *      R_.mapKeys(R_.toUpperFirst, {x: 1, y: 2, z: 3}); //=> {X: 2, Y: 4, Z: 6}
 */
const mapKeys = useWith(compose(fromPairs, map), [overHead, toPairs]);
export default mapKeys;
