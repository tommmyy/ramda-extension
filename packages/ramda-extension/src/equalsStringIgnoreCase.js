import { useWith, equals, toLower } from 'ramda';

/**
 * Testing string if equals ignoring case.
 *
 * @func
 * @category String
 *
 * @param  {string} x
 * @param  {string} y
 * @return {boolean} True if `x` equals `y` ignore case
 *
 * @example
 *
 *        R_.equalsStringIgnoreCase('hello', 'HELLO')	// true
 *        R_.equalsStringIgnoreCase('HELLO', 'hello')	// true
 *        R_.equalsStringIgnoreCase('hello', 'hello')	// true
 *        R_.equalsStringIgnoreCase('hello', 'good bye')	// false
 *
 * @sig a -> b -> Boolean
 */
const equalsStringIgnoreCase = useWith(equals, [toLower, toLower]);

export default equalsStringIgnoreCase;
