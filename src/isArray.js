import { is } from 'ramda';

/**
 * Returns true if argument is type of Array.
 *
 * @category Type
 *
 * @example
 *
 * 		isArray([]) // true
 * 		isArray('') // false

 * @sig a -> Boolean
 */
export default is(Array);
