import { adjust, join, o, toUpper } from 'ramda';

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
const toUpperFirst = o(join(''), adjust(toUpper, 0));

export default toUpperFirst;
