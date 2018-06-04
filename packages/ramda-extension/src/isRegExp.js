import { is } from 'ramda';


/**
 * Returns true if argument is RegExp.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *     R_.isRegExp(/foo/) // true
 *     R_.isRegExp(0) // false
 *
 * @sig a -> Boolean
 *
 */
const isRegExp = is(RegExp);

export default isRegExp;
