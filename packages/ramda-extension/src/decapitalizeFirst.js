import { replace, toLower, unless, isNil } from 'ramda';

/**
 * For not-nil string returns string which starts with lower-case letter.
 *
 * @func
 * @category String
 *
 * @param {any} x Any string
 * @return {any} Description
 *
 * @example
 *
 *        R_.decapitalizeFirst('Metallica') // metallica
 *        R_.decapitalizeFirst('metallica') // metallica
 *        R_.decapitalizeFirst(null) // null
 *        R_.decapitalizeFirst(undefined) // undefined
 *
 * @sig String -> String
 */
const decapitalizeFirst = unless(isNil, replace(/^./, toLower));

export default decapitalizeFirst;
