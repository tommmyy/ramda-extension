import { uniq, drop } from 'ramda';
import composeC from './composeC';

/**
 * Returns all unique but the first n elements of the given list,
 * or transducer/transformer (or object with a drop method).
 *
 * @func
 * @category List
 *
 * @param {numner} n
 * @param {array} xs Collection
 *
 * @return {array}
 *
 * @example
 *
 *        R_.uniqDrop(2, ["foo", "foo", "foo"]) // ["foo"]
 *
 * @sig Number -> [a] -> [a]
 */
const uniqDrop = composeC(uniq, drop);

export default uniqDrop;
