/**
 * Alias for Boolean constructor. Returns 'true' for truthy values.
 *
 * @func
 * @category Logic
 *
 * @param {any} input
 * @return {Boolean} `true` if `input` is truthy
 *
 * @example
 *
 *        R_.isTruthy(true) // true
 *        R_.isTruthy({}) // true
 *        R_.isTruthy([]) // true
 *        R_.isTruthy(1) // true
 *        R_.isTruthy("hello") // true
 *        R_.isTruthy(false) // false
 *        R_.isTruthy(0) // false
 *        R_.isTruthy("") // false
 *
 * @sig a -> Boolean
 */
const isTruthy = Boolean;

export default isTruthy;
