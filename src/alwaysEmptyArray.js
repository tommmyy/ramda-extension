import { always } from 'ramda';
import { emptyArray } from './internal';

/**
 * Always returns empty array.
 *
 * @category Function
 *
 * @example
 *
 *		alwaysEmptyArray() // []
 *
 * @sig a -> [a]
 */
export default always(emptyArray);
