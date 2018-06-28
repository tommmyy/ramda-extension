import { anyPass, isEmpty, isNil } from 'ramda';

/**
 * Returns true if input is empty or nil.
 *
 * @func
 * @category Logic
 *
 * @param {any} input
 * @return {Boolean}
 *
 * @example
 *
 *        R_.isNilOrEmpty(null) // true
 *        R_.isNilOrEmpty({}) // true
 *        R_.isNilOrEmpty(false) // false
 *        R_.isNilOrEmpty(0) // false
 *
 * @sig a -> Boolean
 */
const isNilOrEmpty = anyPass([isNil, isEmpty]);

export default isNilOrEmpty;
