import { defaultTo } from 'ramda';
import { emptyObject } from './internal/primitives';

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise the empty object is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToEmptyObject(null);  //=> {}
 *        R_.defaultToEmptyObject(undefined);  //=> {}
 *        R_.defaultToEmptyObject('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToEmptyObject(parseInt('string')); //=> {}
 *
 * @sig a -> a | Object
 */
const defaultToEmptyObject = defaultTo(emptyObject);

export default defaultToEmptyObject;
