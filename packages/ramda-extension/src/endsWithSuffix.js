import { useWith, flip, test, identity, concat } from 'ramda';
import constructRegExp from './constructRegExp';

const getRegExp_ = useWith(flip(constructRegExp)('gi'), [flip(concat)('$')]);

/**
 * Testing string if ends with some suffix.
 *
 * @func
 * @category String
 *
 * @param  {string} suffix
 * @param  {string} x
 * @return {boolean}          True if `x` ends with `suffix`
 *
 * @example
 *
 *        R_.endsWithSuffix('o', 'hello')		// true
 *        R_.endsWithSuffix('ello', 'hello')	// true
 *        R_.endsWithSuffix('y', 'good bye')	// false
 *
 * @sig a -> b -> Boolean
 */
const endsWithSuffix = useWith(test, [getRegExp_, identity]);

export default endsWithSuffix;
