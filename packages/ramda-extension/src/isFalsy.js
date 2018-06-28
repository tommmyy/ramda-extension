import { complement } from 'ramda';
import isTruthy from './isTruthy';

/**
 * Returns `true` for falsy values. Complement of `R_.falsy`.
 *
 * @func
 * @category Logic
 *
 * @param {any} input
 * @return {Boolean} `true` if `input` is falsy
 *
 * @example
 *
 *        R_.isFalsy(true) // false
 *        R_.isFalsy({}) // false
 *        R_.isFalsy([]) // false
 *        R_.isFalsy(1) // false
 *        R_.isFalsy("hello") // false
 *        R_.isFalsy(false) // true
 *        R_.isFalsy(0) // true
 *        R_.isFalsy("") // true
 *
 * @sig a -> Boolean
 */
const isFalsy = complement(isTruthy);

export default isFalsy;
