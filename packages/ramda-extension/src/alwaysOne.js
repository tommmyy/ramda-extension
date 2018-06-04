import { always } from 'ramda';

/**
 * Always returns number one.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysOne() // 1
 *
 * @sig * -> Number
 */
const alwaysOne = always(1);

export default alwaysOne;
