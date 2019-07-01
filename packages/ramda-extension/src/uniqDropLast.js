import { uniq, dropLast } from 'ramda';
import composeC from './composeC';

/**
 * Returns all unique but the last n elements of the given list,
 * or transducer/transformer (or object with a drop method).
 *
 * @func
 * @category List
 *
 * @param {number} n
 * @param {Array} xs Collection
 *
 * @return {Array}
 *
 * @example
 *
 *        R_.uniqDropLast(2, ["bar", "foo", "foo"]) // ["foo"]
 *
 * @sig Number -> [a] -> [a]
 */
const uniqDropLast = composeC(uniq, dropLast);

export default uniqDropLast;
