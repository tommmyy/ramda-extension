import { replace, toUpper, unless, isNil } from 'ramda';

/**
 * For not-nil string returns string where every single word starts with a capital letter.
 *
 * @func
 * @category String
 *
 * @param {any} x Any string
 * @return {any} String where every word starts with upper-case letter
 *
 * @example
 *
 *        R_.capitalizeAll('seek and destroy') // Seek And Destroy
 *        R_.capitalizeAll('Seek And Destroy') // Seek And Destroy
 *        R_.capitalizeAll(null) // null
 *        R_.capitalizeAll(undefined) // undefined
 *
 * @sig String -> String
 */
const capitalizeAll = unless(isNil, replace(/(\b\w(?!\s))/g, toUpper));

export default capitalizeAll;
