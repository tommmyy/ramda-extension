import isNotNil from './isNotNil';

/**
 * Alias for `isNotNil`
 *
 * @deprecated
 * @func
 * @category Logic
 * @see isNotNil
 *
 * @example
 *
 *        R_.notNil(null)		// false
 *        R_.notNil(undefined)	// false
 *        R_.notNil('')		// true
 *        R_.notNil(false)	// true
 *        R_.notNil(0)		// true
 *        R_.notNil([])		// true
 *        R_.notNil({})		// true
 *
 * @sig a -> Boolean
 */
const notNil = isNotNil;

export default notNil;
