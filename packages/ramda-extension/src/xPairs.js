import { of, identity, useWith, xprod } from 'ramda';

/**
 * Creates pairs from value and list of values.
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.xPairs((1, [2, 3])) // [[1, 2], [1, 3]]
 *
 * @sig a -> [b] -> [[a, b]]
 */
const xPairs = useWith(xprod, [of, identity]);

export default xPairs;
