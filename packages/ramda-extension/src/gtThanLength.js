import { gt } from 'ramda';
import { compareLength } from './internal/lengthUtils';

/**
 * Returns true if length of array is smaller than first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 *        const lengthSmallerThanTwo = R_.gtThanLength(2)
 *        lengthSmallerThanTwo([{}])	// true
 *        lengthSmallerThanTwo([{},{}])	// false
 *
 * @sig Number -> [a] -> Boolean
 */
const gtThanLength = compareLength(gt);

export default gtThanLength;
