import { uniq, length } from 'ramda';
import composeC from './composeC';

/**
 * Returns number of unique values in an input array
 *
 * @func
 * @category List
 *
 * @param {array} xs Data
 *
 * @return {number} Number of Unique values in input array
 *
 * @example
 *
 *        R_.uniqLength(["hello", "world", "world"]) // 2
 *
 * @sig [a] -> Number
 */
const uniqLength = composeC(length, uniq);

export default uniqLength;
