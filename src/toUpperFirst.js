import { o, join, adjust, toUpper } from 'ramda';

/**
 * @example
 *
 * 		toUpperFist('hello') // 'Hello'
 */
export default o(join(''), adjust(toUpper, 0));
