import { always } from 'ramda';
import { emptyArray } from './internal';

/**
 * Always returns empty array.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysEmptyArray() // []
 *
 * @sig a -> [a]
 */
const alwaysEmptyArray = always(emptyArray);

export default alwaysEmptyArray;
