import { o, not, isNil } from 'ramda';

/**
 * Returns true if argument is neither null or undefined.
 *
 * @category Logic
 *
 * @example
 *
 * 		notNil(null) // false
 * 		notNil(undefined) // false
 * 		notNil('') // true
 * 		notNil(false) // true
 * 		notNil(0) // true
 * 		notNil([]) // true
 * 		notNil({}) // true
 *
 * @sig a -> Boolean
 */
export default o(not, isNil);
