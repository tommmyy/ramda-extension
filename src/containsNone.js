import { curry, compose, isEmpty, intersection } from 'ramda';

/**
 * Returns `true` if any of the items from first array is not the second array.
 * @sig [a] -> [a] -> Boolean
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If any of the items from first array is not in the second array.
 * @example
 *  containsNone(['e', 'f'], ['a', 'b', 'c']) // true
 *  containsNone(['a', 'f'], ['a', 'b', 'c']) // false
 *
 */
export default curry(compose(isEmpty, intersection));
