import { apply, pipe } from 'ramda';

/**
 * Applies pipe by to a list of functions.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.applyPipe([multiply(2), add(1)])(3) // 7
 *
 * @sig [(a -> b)] -> a -> b
 */
const applyPipe = apply(pipe);

export default applyPipe;
