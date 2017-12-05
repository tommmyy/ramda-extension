import { allPass, o } from 'ramda';
import notNaN from './notNaN';

/**
 * Returns true if argument is finite numeric value.
 * @func
 * @category Logic
 *
 * @example
 *
 * 		isNumeric(-1) // true
 *   	isNumeric(0) // true
 *    	isNumeric(1) // true
 *    	isNumeric(1.1) // true
 *     	isNumeric(Infinity) // false
 *		isNumeric(NaN) // false
 *		isNumeric('') // false
 *		isNumeric(() => {}) // false
 *		isNumeric(false) // false
 *		isNumeric(null) // false
 *		isNumeric(undefined) // false
 *		isNumeric({}) // false
 *		isNumeric([]) // false
 *
 * @sig a -> Boolean
 *
 */
const isNumeric = allPass([o(notNaN, parseFloat), isFinite]);
export default isNumeric;
