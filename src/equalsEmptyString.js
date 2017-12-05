import { equals } from 'ramda';
import { emptyString } from './internal';

/**
 * Testing if function is equals to ''
 * @func
 * @category String
 *
 * @param  {string} string
 * @return {boolean} True if string is empty
 *
 * @example
 *
 * 		equalsEmptyString('') // true
 * 		equalsEmptyString('hi') // false
 *
 * @sig a -> Boolean
 */
const equalsEmptyString = equals(emptyString);
export default equalsEmptyString;
