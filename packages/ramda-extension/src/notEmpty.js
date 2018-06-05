import isNotEmpty from './isNotEmpty';

/**
 * Alias for `isNotEmpty`
 *
 * @deprecated
 * @func
 * @category Logic
 * @see isNotEmpty
 *
 * @example
 *
 *        R_.notEmpty([1, 2, 3]);   // true
 *        R_.notEmpty([]);          // false
 *        R_.notEmpty('');          // false
 *        R_.notEmpty(null);        // true
 *        R_.notEmpty({});          // false
 *        R_.notEmpty({length: 0}); // true
 *
 * @sig a -> Boolean
 */
const notEmpty = isNotEmpty;

export default notEmpty;
