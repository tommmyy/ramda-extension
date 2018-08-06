import { is } from 'ramda';

/**
 * Returns true if the argument is an instance of Error.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *        R_.isError(new Error())	// true
 *        R_.isError(null)	// false
 *
 * @sig a -> Boolean
 *
 */
const isError = is(Error);

export default isError;
