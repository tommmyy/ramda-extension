import {curry, compose, not, isEmpty, intersection } from 'ramda';
/**
 * Returns `true` if any of the items from first array are in the second array.
 * @sig [a] -> [a] -> Boolean
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If any of the items from first array are in the second array.
 * @example
 *  containsAny(['a', 'e'], ['a', 'b', 'c']) // true
 *  containsAny(['e', 'f'], ['a', 'b', 'c']) // false
 *
 */
export default curry(compose(not, isEmpty, intersection));
