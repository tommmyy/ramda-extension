import { defaultTo } from 'ramda';
import { emptyString } from './internal/primitives';

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise the empty string is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToEmptyString(null);  //=> ""
 *        R_.defaultToEmptyString(undefined);  //=> ""
 *        R_.defaultToEmptyString('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToEmptyString(parseInt('string')); //=> ""
 *
 * @sig a -> a | String
 */
const defaultToEmptyString = defaultTo(emptyString);

export default defaultToEmptyString;
