import { complement } from 'ramda';
import isNumeric from './isNumeric';

/**
 * Returns true if argument is not finite numeric value.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.isNotNumeric(-1)	// false
 *        R_.isNotNumeric(0)	// false
 *        R_.isNotNumeric(1)	// false
 *        R_.isNotNumeric(1.1)	// false
 *        R_.isNotNumeric(Infinity)	// true
 *        R_.isNotNumeric(NaN)	// true
 *        R_.isNotNumeric('')	// true
 *        R_.isNotNumeric(() => {})	// true
 *        R_.isNotNumeric(false)	// true
 *        R_.isNotNumeric(null)	// true
 *        R_.isNotNumeric(undefined)// true
 *        R_.isNotNumeric({})	// true
 *        R_.isNotNumeric([])	// true
 *
 * @sig a -> Boolean
 *
 */
const isNotNumeric = complement(isNumeric);

export default isNotNumeric;
