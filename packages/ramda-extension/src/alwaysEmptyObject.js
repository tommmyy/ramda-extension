import { always } from 'ramda';
import { emptyObject } from './internal';

/**
 * Always returns empty object.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysEmptyObject() // {}
 *
 * @sig a -> [a]
 */
const alwaysEmptyObject = always(emptyObject);

export default alwaysEmptyObject;
