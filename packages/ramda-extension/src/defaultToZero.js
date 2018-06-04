import { defaultTo } from 'ramda';

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise zero is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToZero(null);  //=> 0
 *        R_.defaultToZero(undefined);  //=> 0
 *        R_.defaultToZero('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToZero(parseInt('string')); //=> 0
 *
 * @sig a -> a | Number
 */
const defaultToZero = defaultTo(0);

export default defaultToZero;
