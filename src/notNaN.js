import { o, not } from 'ramda';

/* eslint-disable max-len */
/**
 * Return negation of native isNaN function.
 *
 * @category Logic
 *
 * @example
 *
 * 		notNaN(NaN)			// false
 * 		notNaN(0)			// true
 * 		notNaN('')			// true
 * 		notNaN({})			// false
 * 		notNaN([])			// true
 * 		notNaN(null)		// true
 * 		notNaN(undefined)	// false
 *
 * @see http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
 *
 * @sig a -> Boolean
 */
export default o(not, isNaN);
/* eslint-enable max-len */
