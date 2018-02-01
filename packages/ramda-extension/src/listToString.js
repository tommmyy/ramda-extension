import { join } from 'ramda';
import { emptyString } from './internal';

/**
 * Converts list of strings to string.
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.listToString(['h', 'e', 'l', 'l', 'o']) // 'hello'
 *
 * @sig [String] -> String
 *
 */
const listToString = join(emptyString);

export default listToString;
