import { join } from 'ramda';

/**
 * Joins array of string with space determiner.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.joinWithSpace(['a', 'b', 'c']) // 'a b c'
 *
 * @sig [String] -> String
 */
const joinWithSpace = join(' ');

export default joinWithSpace;
