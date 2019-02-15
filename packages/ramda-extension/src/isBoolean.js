import { is } from 'ramda';

/**
 * Returns true if argument is type of Boolean.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *        R_.isBoolean(true)	// true
 *        R_.isBoolean(false)	// true
 *        R_.isBoolean(1)		// false
 *        R_.isBoolean('')		// false
 *        R_.isBoolean('true')	// false
 *        R_.isBoolean({})		// false
 *        R_.isBoolean([])		// false
 *        R_.isBoolean(NaN)		// false
 *        R_.isBoolean(null)	// false
 *        R_.isBoolean(undefined)	// false
 *
 * @sig a -> Boolean
 */
const isBoolean = is(Boolean);

export default isBoolean;
