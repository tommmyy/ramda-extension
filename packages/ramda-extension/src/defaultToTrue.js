import { defaultTo } from 'ramda';

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise true is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToTrue(null);  //=> true
 *        R_.defaultToTrue(undefined);  //=> true
 *        R_.defaultToTrue('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToTrue(parseInt('string')); //=> true
 *
 * @sig a -> a | Boolean
 */
const defaultToTrue = defaultTo(true);

export default defaultToTrue;
