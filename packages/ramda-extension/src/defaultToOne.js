import { defaultTo } from 'ramda';

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise number one is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToOne(null);  //=> 1
 *        R_.defaultToOne(undefined);  //=> 1
 *        R_.defaultToOne('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToOne(parseInt('string')); //=> 1
 *
 * @sig a -> a | Number
 */
const defaultToOne = defaultTo(1);

export default defaultToOne;
