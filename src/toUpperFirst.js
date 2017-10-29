import { o, join, adjust, toUpper } from 'ramda';

/**
 * Capitalize first letter.
 *
 * @category String
 *
 * @example
 *
 * 		toUpperFist('hello') // 'Hello'
 *
 * @sig String -> String
 */
export default o(join(''), adjust(toUpper, 0));
