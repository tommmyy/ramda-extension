import { always } from 'ramda';
import { emptyString } from './internal';

/**
 * Always returns empty string.
 * @func
 * @category Function
 *
 * @example
 *
 *		alwaysEmptyString() // ''
 *
 * @sig a -> String
 */
const alwaysEmptyString = always(emptyString);
export default alwaysEmptyString;
