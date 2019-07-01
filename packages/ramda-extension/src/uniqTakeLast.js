import { uniq, takeLast } from 'ramda';
import composeC from './composeC';

/**
 * Returns the last n of unique elements of the given list,
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
 *        R_.uniqTakeLast(2, ['foo', 'bar', 'bar']); //=> ['bar']
 *
 * @sig Number -> [a] -> [a]
 */
const uniqTakeLast = composeC(uniq, takeLast);

export default uniqTakeLast;
