import isNotNaN from './isNotNaN';

/**
 * Alias for `isNotNaN`.
 *
 * @deprecated [description]
 * @func
 * @category Logic
 * @see isNotNaN
 *
 * @example
 *
 *        R_.notNaN(0)            // true
 *        R_.notNaN('')           // true
 *        R_.notNaN([])           // true
 *        R_.notNaN(null)         // true
 *        R_.notNaN({})           // false
 *        R_.notNaN(NaN)          // false
 *        R_.notNaN(undefined)    // false
 *
 * @sig a -> Boolean
 */
const notNaN = isNotNaN;

export default notNaN;
