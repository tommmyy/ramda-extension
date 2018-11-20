import { o, join, adjust, toUpper } from 'ramda';

/**
 * Capitalize first letter.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toUpperFirst('hello world') // 'Hello world'
 *
 * @sig String -> String
 */
const toUpperFirst = o(join(''), adjust(0, toUpper));

export default toUpperFirst;
