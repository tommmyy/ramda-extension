import { always } from 'ramda';
import { emptyObject } from './internal';

/**
 * Always returns empty object.
 *
 * @category Function
 *
 * @example
 *
 *		alwaysEmptyObject() // {}
 *
 * @sig a -> [a]
 */
export default always(emptyObject);
