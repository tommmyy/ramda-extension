import { uniq, takeLastWhile } from 'ramda';
import composeC from './composeC';

/**
 * Returns a new list containing the unique last n elements of a given list,
 * passing each value to the supplied predicate function,
 * and terminating when the predicate function returns false.
 * Excludes the element that caused the predicate function to fail.
 * The predicate function is passed one argument: (value).
 *
 * Acts as a transducer if a transformer is given in list position.
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
 *        R_.uniqTakeLastWhile(x => x !== 4, [1, 2, 3, 4, 3, 2, 1, 1]); // [3, 2, 1]
 *
 *
 * @sig (a -> Boolean) -> [a] -> [a]
 */
const uniqTakeLastWhile = composeC(uniq, takeLastWhile);

export default uniqTakeLastWhile;
