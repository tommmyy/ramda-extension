import { complement, isNil } from 'ramda';

/**
 * Returns true if argument is neither null or undefined.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.isNotNil(null)		// false
 *        R_.isNotNil(undefined)	// false
 *        R_.isNotNil('')		// true
 *        R_.isNotNil(false)	// true
 *        R_.isNotNil(0)		// true
 *        R_.isNotNil([])		// true
 *        R_.isNotNil({})		// true
 *
 * @sig a -> Boolean
 */
const isNotNil = complement(isNil);

export default isNotNil;
