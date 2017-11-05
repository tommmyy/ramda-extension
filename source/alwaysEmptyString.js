import { always } from 'ramda';
import { emptyString } from './internal';

/**
 * Always returns empty string.
 *
 * @category Function
 *
 * @example
 *
 *		alwaysEmptyString() // ''
 *
 * @sig a -> String
 */
export default always(emptyString);
