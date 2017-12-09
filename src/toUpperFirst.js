import { o, join, adjust, toUpper } from 'ramda';

/**
 * Capitalize first letter.
 * @func
 * @category String
 *
 * @example
 *
 * 		R_.toUpperFirst('hello') // 'Hello'
 *
 * @sig String -> String
 */
const toUpperFirst = o(join(''), adjust(toUpper, 0));
export default toUpperFirst;
