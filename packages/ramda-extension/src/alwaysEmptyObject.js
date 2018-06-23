import alwaysNew from './internal/alwaysNew';
import { emptyObject } from './internal/primitives';

/**
 * Always returns a new empty object.
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
const alwaysEmptyObject = alwaysNew(emptyObject);

export default alwaysEmptyObject;
