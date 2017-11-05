import { split } from 'ramda';

/**
 * Splits string by dot into list.
 *
 * @category String
 *
 * @example
 *
 * 		splitByDot('a.b.c') // ['a', 'b', 'c']
 *
 * @sig String -> [String]
 */
export default split('.');
