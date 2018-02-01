import { curry, compose, isEmpty, difference } from 'ramda';

/**
 * Resolves to true if all elements in first list are found within the second list
 *
 * @func
 * @category List
 *
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If all items from first array are in the second array.
 *
 * @example
 *
 *    R_.containsAll(['a', 'b'], ['a', 'b', 'c']) // true
 *    R_.containsAll(['a', 'b', 'd'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 *
 */
const containsAll = curry(compose(isEmpty, difference));

export default containsAll;
