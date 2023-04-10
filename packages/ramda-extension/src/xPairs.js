import { of, identity, useWith, xprod } from 'ramda';

/**
 * Creates pairs from value and list of values.
 * Value is always prepended to the pair.
 *
 * @func
 * @category List
 * @see xPairsRight
 *
 * @example
 *
 *        R_.xPairs(1, [2, 3]) // [[1, 2], [1, 3]]
 *
 * @sig a -> [b] -> [[a, b]]
 */
const xPairs = useWith(xprod, [of(Array), identity]);

export default xPairs;
