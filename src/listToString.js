import { join } from 'ramda';
import { emptyString } from './internal';

/**
 * Converts list of strings to string.
 *
 * @category List
 *
 * @example
 *
 * 		listToString(['h', 'e', 'l', 'l', 'o']) // 'hello'
 *
 * @sig [String] -> String
 *
 */
export default join(emptyString);
