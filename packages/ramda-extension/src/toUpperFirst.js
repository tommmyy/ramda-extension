import { o, join, adjust, toUpper, unless, isEmpty } from 'ramda';

const adjustFirstLetter = o(join(''), adjust(0, toUpper));

/**
 * Capitalize first letter.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toUpperFirst('') // ''
 *        R_.toUpperFirst('hello world') // 'Hello world'
 *
 * @sig String -> String
 */
const toUpperFirst = unless(isEmpty, adjustFirstLetter);

export default toUpperFirst;
