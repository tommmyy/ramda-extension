import { always } from 'ramda';

/**
 * Always returns null.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysNull() // null
 *
 * @sig a -> Object
 */
const alwaysNull = always(null);

export default alwaysNull;
