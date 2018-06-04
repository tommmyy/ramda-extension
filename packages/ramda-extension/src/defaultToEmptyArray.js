import { defaultTo } from 'ramda';
import { emptyArray } from './internal/primitives';

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise the empty array is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToEmptyArray(null);  //=> []
 *        R_.defaultToEmptyArray(undefined);  //=> []
 *        R_.defaultToEmptyArray('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToEmptyArray(parseInt('string')); //=> []
 *
 * @sig a -> a | Array
 */
const defaultToEmptyArray = defaultTo(emptyArray);

export default defaultToEmptyArray;
