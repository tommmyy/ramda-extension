import { map, uniq } from 'ramda';
import composeC from './composeC';

/**
 * Returns unique values previously returned by mapping.
 *
 * @func
 * @category List
 *
 * @param {Function} fn mapping function
 * @param {array} xs Data
 *
 * @return {array} Unique array of values
 *
 * @example
 *
 *		R_.uniqMap(R_.equalsLength(5))([
 *			"hello",
 *			"hello",
 *			"world"
 *		]) // ["hello", "world"]
 *
 * @sig (a -> a) -> [a] -> [a]
 */
const uniqMap = composeC(uniq, map);

export default uniqMap;
