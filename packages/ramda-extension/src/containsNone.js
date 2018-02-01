import { compose, curry, intersection, isEmpty } from 'ramda';

/**
 * Returns `true` if any of the items from first array is not the second array.
 *
 * @func
 * @category List
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If any of the items from first array is not in the second array.
 *
 * @example
 *
 *    R_.containsNone(['e', 'f'], ['a', 'b', 'c']) // true
 *    R_.containsNone(['a', 'f'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 */
const containsNone = curry(compose(isEmpty, intersection));

export default containsNone;
