import { always } from 'ramda';

/**
 * Always returns zero.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysZero() // 0
 *
 * @sig * -> Number
 */
const alwaysZero = always(0);

export default alwaysZero;
