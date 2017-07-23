import R from 'ramda';
/**
 * Returns `true` if all items from first array are in the second array.
 * @sig [a] -> [a] -> Boolean
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If all items from first array are in the second array.
 * @example
 *  containsAll(['a', 'b'], ['a', 'b', 'c']) // true
 *  containsAll(['a', 'b', 'd'], ['a', 'b', 'c']) // false
 *
 */
export default R.curry(R.compose(R.isEmpty, R.difference));
