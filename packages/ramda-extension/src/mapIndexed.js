import { map, addIndex } from 'ramda';

/**
 * Map using function that is provided with each value of the list and its index in the list.
 *
 * @func
 * @category Object
 *
 * @param {Function} fn The function to be called on every element of the `list` and its index.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 *
 * @example
 *
 *        R_.mapIndexed((value, index) => `${value}-${index}`)([1, 2, 3])
 *        // ['1-0', '2-1', '3-2']
 *
 * @sig (a -> Number -> a) -> [a] -> a
 */
const mapIndexed = addIndex(map);

export default mapIndexed;
