import { useWith, compose, call, juxt, identity } from 'ramda';
import findNotNil from './findNotNil';

/**
 * Returns first not nil value of dispatching list of functions over a input.
 *
 * @example
 *
 * 		dispatch([R.always(null), R.identity, R.always(null)], 3) // 3
 * 		dispatch([R.always(null), R.identity, R.always(null)], null) // undefined
 *
 * @sig [a] -> b
 */
export default useWith(compose(findNotNil, call), [juxt, identity]);
