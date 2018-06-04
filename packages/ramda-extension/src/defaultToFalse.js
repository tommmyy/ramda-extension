import { defaultTo } from 'ramda';

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise the false is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToFalse(null);  //=> false
 *        R_.defaultToFalse(undefined);  //=> false
 *        R_.defaultToFalse('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToFalse(parseInt('string')); //=> false
 *
 * @sig a -> a | Boolean
 */
const defaultToFalse = defaultTo(false);

export default defaultToFalse;
