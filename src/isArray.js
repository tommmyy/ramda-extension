import { is } from 'ramda';

/**
 * Returns true if argument is type of Array.
 * @func
 * @category Type
 *
 * @example
 *
 * 		isArray([]) // true
 * 		isArray('') // false

 * @sig a -> Boolean
 */
const isArray = is(Array);
export default isArray;
