import { startsWith, toUpper, useWith } from 'ramda';

/**
 * Testing string if starts with some prefix ignoring case.
 *
 * @func
 * @category String
 *
 * @param  {string} prefix
 * @param  {string} x
 * @return {boolean} True if `x` starts with `prefix` ignore case
 *
 * @example
 *
 *        R_.startsWithPrefixIgnoreCase('h', 'HELLO')	// true
 *        R_.startsWithPrefixIgnoreCase('HELL', 'hello')	// true
 *        R_.startsWithPrefixIgnoreCase('hello', 'hello')	// true
 *        R_.startsWithPrefixIgnoreCase('h', 'good bye')	// false
 *
 * @sig a -> b -> Boolean
 */
export default useWith(startsWith, [toUpper, toUpper]);
