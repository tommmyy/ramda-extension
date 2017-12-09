import { is } from 'ramda';

/**
 * Returns true if argument is type of Array.
 * @func
 * @category Type
 *
 * @example
 *
 * 		R_.isArray([]) // true
 * 		R_.isArray('') // false

 * @sig a -> Boolean
 */
const isArray = is(Array);
export default isArray;
