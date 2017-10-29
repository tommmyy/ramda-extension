import { curry, compose, isEmpty, difference } from 'ramda';
/**
 * Returns `true` if all items from first array are in the second array.
 *
 * @category List
 *
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If all items from first array are in the second array.
 *
 * @example
 *
 *  	containsAll(['a', 'b'], ['a', 'b', 'c']) // true
 *   	containsAll(['a', 'b', 'd'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 *
 */
export default curry(compose(isEmpty, difference));
