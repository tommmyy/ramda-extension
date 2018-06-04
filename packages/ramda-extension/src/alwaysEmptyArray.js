import { always } from 'ramda';
import { emptyArray } from './internal/primitives';

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
 * @sig a -> Array
 */
const alwaysEmptyArray = always(emptyArray);

export default alwaysEmptyArray;
