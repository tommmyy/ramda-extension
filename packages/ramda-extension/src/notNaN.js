import { not, o } from 'ramda';

/* eslint-disable max-len */
/**
 * Return negation of native isNaN function.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.notNaN(0)            // true
 *        R_.notNaN('')            // true
 *        R_.notNaN([])            // true
 *        R_.notNaN(null)        // true
 *        R_.notNaN({})            // false
 *        R_.notNaN(NaN)            // false
 *        R_.notNaN(undefined)    // false
 *
 * @see http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
 *
 * @sig a -> Boolean
 */
const notNaN = o(not, isNaN);

export default notNaN;
/* eslint-enable max-len */
