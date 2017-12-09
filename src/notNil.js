import { o, not, isNil } from 'ramda';

/**
 * Returns true if argument is neither null or undefined.
 * @func
 * @category Logic
 *
 * @example
 *
 * 		R_.notNil(null) // false
 * 		R_.notNil(undefined) // false
 * 		R_.notNil('') // true
 * 		R_.notNil(false) // true
 * 		R_.notNil(0) // true
 * 		R_.notNil([]) // true
 * 		R_.notNil({}) // true
 *
 * @sig a -> Boolean
 */
const notNil = o(not, isNil);
export default notNil;
