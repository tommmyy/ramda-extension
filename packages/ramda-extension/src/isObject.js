import { is } from 'ramda';

/**
 * Returns true if argument is type of Object.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *        R_.isObject({}) // true
 *        R_.isObject([]) // true
 *        R_.isObject('') // false

 * @sig a -> Boolean
 */
const isObject = is(Object);

export default isObject;
