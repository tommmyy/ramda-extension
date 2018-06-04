import { complement } from 'ramda';

/* eslint-disable max-len */
/**
 * Return negation of native isNaN function.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.isNotNaN(0)            // true
 *        R_.isNotNaN('')           // true
 *        R_.isNotNaN([])           // true
 *        R_.isNotNaN(null)         // true
 *        R_.isNotNaN({})           // false
 *        R_.isNotNaN(NaN)          // false
 *        R_.isNotNaN(undefined)    // false
 *
 * @see http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
 *
 * @sig a -> Boolean
 */
const isNotNaN = complement(isNaN);

export default isNotNaN;
/* eslint-enable max-len */
