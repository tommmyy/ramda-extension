import { uniq, take } from 'ramda';
import composeC from './composeC';

/**
 * Returns the first n of unique elements of the given list,
 * or transducer/transformer (or object with a take method).
 *
 * @func
 * @category List
 *
 * @param {Number} n
 *
 * @return {array}
 *
 * @example
 *
 *        R_.uniqTake(2, ['foo', 'foo', 'baz']); //=> ['foo']
 *        R_.uniqTake(3, ['foo', 'foo', 'baz']); //=> ['foo', 'baz']
 *
 * @sig Number -> [a] -> [a]
 */
const uniqTake = composeC(uniq, take);

export default uniqTake;
