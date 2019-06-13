import { flip, path } from 'ramda';

/**
 * Returns part of the object based on path.
 *
 * @func
 * @category Object
 *
 * @param {any} x
 * @param {[any]} path
 * @return {any} Slice of x
 *
 * @example
 *
 *        R_.get({ foo: "bar" }, ["foo"]) // "bar"
 *
 * @sig a -> [a] -> a
 */
const get = flip(path);

export default get;
