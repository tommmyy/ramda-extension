import { always } from 'ramda';
import { emptyString } from './internal';

/**
 * Always returns empty string.
 * @func
 * @category Function
 *
 * @example
 *
 *		R_.alwaysEmptyString() // ''
 *
 * @sig a -> String
 */
const alwaysEmptyString = always(emptyString);
export default alwaysEmptyString;
