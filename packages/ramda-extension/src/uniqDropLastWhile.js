import { uniq, dropLastWhile } from 'ramda';
import composeC from './composeC';
/**
 * Returns a new unique list excluding the last elements of a given list
 * which satisfy the supplied predicate function.
 * It passes each value to the supplied predicate function, skipping elements while the predicate function returns true.
 *
 * @func
 * @category List
 *
 * @param {function} fn The function called per iteration.
 * @param {array} xs The collection to iterate over.
 *
 * @return {array} New array
 *
 * @example
 *
 *        R_.uniqDropLastWhile(x => x !== 4, [1, 1, 1, 2, 3, 4, 3, 2, 1]); // [1, 2, 3, 4]
 *
 *
 * @sig (a -> Boolean) -> [a] -> [a]
 */
const uniqDropLastWhile = composeC(uniq, dropLastWhile);

export default uniqDropLastWhile;
