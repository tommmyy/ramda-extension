import { nth } from 'ramda';

/**
 * Applies composition by a list of functions.
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.snd([1, 2]) // 2
 *
 * @sig [x] -> x
 */
const snd = nth(1);

export default snd;
