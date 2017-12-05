import { o, not, isNil } from 'ramda';

/**
 * Returns true if argument is neither null or undefined.
 * @func
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
const notNil = o(not, isNil);
export default notNil;
