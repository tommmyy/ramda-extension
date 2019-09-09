import { replace, toLower, unless, isNil } from 'ramda';

/**
 * For not-nil string returns string where every single word starts with a lower-case letter.
 *
 * @func
 * @category String
 *
 * @param {any} x Any string
 * @return {any} String where every word starts with lower-case letter
 *
 * @example
 *
 *        R_.decapitalizeAll('Seek And Destroy') // seek and destroy
 *        R_.decapitalizeAll('seek and destroy') // seek and destroy
 *        R_.decapitalizeAll(null) // null
 *        R_.decapitalizeAll(undefined) // undefined
 *
 * @sig String -> String
 */
const decapitalizeAll = unless(isNil, replace(/(\b\w(?!\s))/g, toLower));

export default decapitalizeAll;
