import { o, not } from 'ramda';
import isNumeric from './isNumeric';

/**
 * Returns true if argument is not finite numeric value.
 *
 * @category Logic
 *
 * @example
 *
 * 		notNumeric(-1) // false
 *   	notNumeric(0) // false
 *    	notNumeric(1) // false
 *    	notNumeric(1.1) // false
 *     	notNumeric(Infinity) // true
 *		notNumeric(NaN) // true
 *		notNumeric('') // true
 *		notNumeric(() => {}) // true
 *		notNumeric(false) // true
 *		notNumeric(null) // true
 *		notNumeric(undefined) // true
 *		notNumeric({}) // true
 *		notNumeric([]) // true
 *
 * @sig a -> Boolean
 *
 */
export default o(not, isNumeric);
