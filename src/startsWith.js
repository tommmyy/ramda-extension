import { useWith, flip, test, identity, concat } from 'ramda';
import constructRegExp from './constructRegExp';


const getRegExp_ = useWith(flip(constructRegExp)('gi'), [concat('^')]);

/**
 * Testing string if starts with some prefix.
 *
 * @param  {string} prefix
 * @param  {string} x
 * @return {boolean}          True if `x` starts with `prefix`
 *
 * @example
 *
 * 		startsWith('h', 'hello') // true
 * 		startsWith('hell', 'hello') // true
 * 		startsWith('h', 'good bye') // false
 *
 * @sig a -> b -> Boolean
 */
export default useWith(test, [getRegExp_, identity]);
