import { replace, toUpper, unless, isNil } from 'ramda';

/**
 * For not-nil string returns string which starts with capital (upper-case) letter.
 *
 * @func
 * @category String
 *
 * @param {any} x Any string
 * @return {any} Description
 *
 * @example
 *
 *        R_.capitalizeFirst('metallica') // Metallica
 *        R_.capitalizeFirst('Metallica') // Metallica
 *        R_.capitalizeFirst(null) // null
 *        R_.capitalizeFirst(undefined) // undefined
 *
 * @sig String -> String
 */
const capitalizeFirst = unless(isNil, replace(/^./, toUpper));

export default capitalizeFirst;
