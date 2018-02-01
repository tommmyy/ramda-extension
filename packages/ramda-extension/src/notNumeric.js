import { o, not } from 'ramda';
import isNumeric from './isNumeric';

/**
 * Returns true if argument is not finite numeric value.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.notNumeric(-1)	// false
 *        R_.notNumeric(0)	// false
 *        R_.notNumeric(1)	// false
 *        R_.notNumeric(1.1)	// false
 *        R_.notNumeric(Infinity)	// true
 *        R_.notNumeric(NaN)	// true
 *        R_.notNumeric('')	// true
 *        R_.notNumeric(() => {})	// true
 *        R_.notNumeric(false)	// true
 *        R_.notNumeric(null)	// true
 *        R_.notNumeric(undefined)// true
 *        R_.notNumeric({})	// true
 *        R_.notNumeric([])	// true
 *
 * @sig a -> Boolean
 *
 */
const notNumeric = o(not, isNumeric);

export default notNumeric;
