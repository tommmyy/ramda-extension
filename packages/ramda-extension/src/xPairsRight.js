import { useWith, flip, xprod, of, identity } from 'ramda';

/**
 * Creates pairs from value and list of values.
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.xPairsRight((1, [2, 3])) // [[2, 1], [3, 1]]
 *
 * @sig a -> [b] -> [[b, a]]
 */
const xPairsRight = useWith(flip(xprod), [of, identity]);

export default xPairsRight;
