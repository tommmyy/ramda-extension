import { gte } from 'ramda';
import { compareLength } from './lengthUtils';

/**
 * Returns true if length of array is smaller or equals than first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 *		const lengthSmallerThanEqualsOne = R_.gteThanLength(1)
 *		lengthSmallerThanEqualsTwo([{},{}]) // false
 *		lengthSmallerThanEqualsTwo([{}]) // true
 *		lengthSmallerThanEqualsTwo([]) // true
 *
 * @sig Number -> [a] -> Boolean
 */
const gteThanLength = compareLength(gte);

export default gteThanLength;
