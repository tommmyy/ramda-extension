import { join } from 'ramda';

/**
 * Joins array of string with dash (hyphen) determiner.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.joinWithDash(['a', 'b', 'c']) // 'a-b-c'
 *
 * @sig [String] -> String
 */
const joinWithDash = join('-');

export default joinWithDash;
