import { useWith, toUpper, endsWith } from 'ramda';

/**
 * Testing string if ends with some suffix ignoring case.
 *
 * @func
 * @category String
 *
 * @param  {string} suffix
 * @param  {string} x
 * @return {boolean} True if `x` ends with `suffix` ignore case
 *
 * @example
 *
 *        R_.endsWithSuffixIgnoreCase('o', 'HELLO')	// true
 *        R_.endsWithSuffixIgnoreCase('ELLO', 'hello')	// true
 *        R_.endsWithSuffixIgnoreCase('hello', 'hello')	// true
 *        R_.endsWithSuffixIgnoreCase('o', 'good bye')	// false
 *
 * @sig a -> b -> Boolean
 */
const endsWithSuffixIgnoreCase = useWith(endsWith, [toUpper, toUpper]);

export default endsWithSuffixIgnoreCase;
