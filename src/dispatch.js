import { useWith, compose, call, juxt, identity } from 'ramda';
import findNotNil from './findNotNil';

/**
 * Returns result of first not nil evaluated functions in the list.
 * Undefined otherwise.
 * @func
 * @category Function
 *
 * @example
 *
 * 		dispatch([R.always(null), R.identity, R.always(null)], 3) // 3
 * 		dispatch([R.always(null), R.identity, R.always(null)], null) // undefined
 *
 * @sig [a] -> b|undefined
 */
const dispatch = useWith(compose(findNotNil, call), [juxt, identity]);
export default dispatch;
