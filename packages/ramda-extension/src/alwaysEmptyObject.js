import { always } from 'ramda';
import { emptyObject } from './internal/primitives';

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
 * @sig a -> Object
 */
const alwaysEmptyObject = always(emptyObject);

export default alwaysEmptyObject;
