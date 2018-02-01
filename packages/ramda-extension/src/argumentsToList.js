import { identity, unapply } from 'ramda';

/**
 * Converts arguments to list.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R.compose(R.sum, R_.argumentsToList)(1, 2, 3) // 6
 *
 * @sig (a, b, c, ...) → ([a, b, c, ...])
 */
const argumentsToList = unapply(identity);

export default argumentsToList;
