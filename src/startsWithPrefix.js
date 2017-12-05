import { useWith, flip, test, identity, concat } from 'ramda';
import constructRegExp from './constructRegExp';


const getRegExp_ = useWith(flip(constructRegExp)('gi'), [concat('^')]);

/**
 * Testing string if starts with some prefix.
 * @func
 * @category String
 *
 * @param  {string} prefix
 * @param  {string} x
 * @return {boolean}          True if `x` starts with `prefix`
 *
 * @example
 *
 * 		startsWithPrefix('h', 'hello') // true
 * 		startsWithPrefix('hell', 'hello') // true
 * 		startsWithPrefix('h', 'good bye') // false
 *
 * @sig a -> b -> Boolean
 */
const startsWithPrefix = useWith(test, [getRegExp_, identity]);
export default startsWithPrefix;
