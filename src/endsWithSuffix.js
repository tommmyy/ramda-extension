import { useWith, flip, test, identity, concat } from 'ramda';
import constructRegExp from './constructRegExp';


const getRegExp_ = useWith(flip(constructRegExp)('gi'), [flip(concat)('$')]);

/**
 * Testing string if starts with some prefix.
 *
 * @param  {string} prefix
 * @param  {string} x
 * @return {boolean}          True if `x` starts with `prefix`
 *
 * @example
 *
 * 		endsWithPrefix('o', 'hello') // true
 * 		endsWithPrefix('ello', 'hello') // true
 * 		endsWithPrefix('y', 'good bye') // false
 *
 * @sig a -> b -> Boolean
 */
export default useWith(test, [getRegExp_, identity]);
