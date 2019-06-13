import { o, map, apply, objOf, toPairs } from 'ramda';

/**
 * Creates array of entries from object.
 *
 * @func
 * @category Object
 *
 * @param {any} object
 * @return {[any]} Description
 *
 * @example
 *
 *        R_.toEntries({ a: "b", c: "d" }) // [{ a: "b" }, { c: "d" }]
 *
 * @sig {String: a, ...} -> [{String: a}]
 */
const toEntries = o(map(apply(objOf)), toPairs);

export default toEntries;
