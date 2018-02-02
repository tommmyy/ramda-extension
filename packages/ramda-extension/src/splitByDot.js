import { split } from 'ramda';

/**
 * Splits string by dot into list.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.splitByDot('a.b.c') // ['a', 'b', 'c']
 *
 * @sig String -> [String]
 */
const splitByDot = split('.');

export default splitByDot;
