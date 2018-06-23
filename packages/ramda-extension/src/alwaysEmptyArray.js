import alwaysNew from './internal/alwaysNew';
import { emptyArray } from './internal/primitives';

/**
 * Always returns a new empty array.
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
const alwaysEmptyArray = alwaysNew(emptyArray);

export default alwaysEmptyArray;
