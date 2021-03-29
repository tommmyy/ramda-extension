import { complement } from 'ramda';
import isRegExp from './isRegExp';

/**
 * Returns true if argument is not RegExp.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *     R_.isNotRegExp(/foo/) // false
 *     R_.isNotRegExp(0) // true
 *
 * @sig a -> Boolean
 *
 */
const isNotRegExp = complement(isRegExp);

export default isNotRegExp;
