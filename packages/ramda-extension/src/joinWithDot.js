import { join } from 'ramda';

/**
 * Joins array of string with dot determiner.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.joinWithDot(['a', 'b', 'c']) // 'a.b.c'
 *
 * @sig [String] -> String
 */
const joinWithDot = join('.');

export default joinWithDot;
