import { allPass, o } from 'ramda';
import notNaN from './notNaN';

/**
 * Returns true if argument is finite numeric value.
 * @func
 * @category Logic
 *
 * @example
 *
 * 		R_.isNumeric(-1) // true
 *   	R_.isNumeric(0) // true
 *    	R_.isNumeric(1) // true
 *    	R_.isNumeric(1.1) // true
 *     	R_.isNumeric(Infinity) // false
 *		R_.isNumeric(NaN) // false
 *		R_.isNumeric('') // false
 *		R_.isNumeric(() => {}) // false
 *		R_.isNumeric(false) // false
 *		R_.isNumeric(null) // false
 *		R_.isNumeric(undefined) // false
 *		R_.isNumeric({}) // false
 *		R_.isNumeric([]) // false
 *
 * @sig a -> Boolean
 *
 */
const isNumeric = allPass([o(notNaN, parseFloat), isFinite]);
export default isNumeric;
