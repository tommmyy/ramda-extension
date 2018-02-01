import { join } from 'ramda';

/**
 * Joins array of string with underscore determiner.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.joinWithUnderscore(['a', 'b', 'c']) // 'a_b_c'
 *
 * @sig [String] -> String
 */
const joinWithUnderscore = join('_');

export default joinWithUnderscore;
