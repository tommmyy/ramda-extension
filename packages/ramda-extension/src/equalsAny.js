import { equals, map, anyPass, o, uncurryN } from 'ramda';

/**
 * Returns true second argument equals any of values from list in first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.equalsAny(['a', 'b', 'c'], 'b')    // true
 *        R_.equalsAny(['a', 'b', 'c'], 'e')    // false
 *
 * @sig [a] -> a -> Boolean
 */
const equalsAny = uncurryN(2, o(anyPass, map(equals)));

export default equalsAny;
