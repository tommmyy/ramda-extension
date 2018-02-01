import { compose, curry, intersection, isEmpty, not } from 'ramda';

/**
 * Returns `true` if any of the items from first array are in the second array.
 *
 * @func
 * @category List
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If any of the items from first array are in the second array.
 *
 * @example
 *
 *    R_.containsAny(['a', 'e'], ['a', 'b', 'c']) // true
 *    R_.containsAny(['e', 'f'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 *
 */
const containsAny = curry(compose(not, isEmpty, intersection));

export default containsAny;
