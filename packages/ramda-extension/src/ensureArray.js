import { of, unless } from 'ramda';
import isArray from './isArray';

/**
 * Wraps input in an Array if it's not an Array already.
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.ensureArray("yo") // ["yo"]
 *        R_.ensureArray(["yo"]) // ["yo"]
 *        R_.ensureArray([{ consoleLog: "yo" }]) // [{ consoleLog: "yo" }]

 * @sig a -> Array
 */
const ensureArray = unless(isArray, of);

export default ensureArray;
