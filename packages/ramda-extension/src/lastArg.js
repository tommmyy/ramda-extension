import { nthArg } from 'ramda';

/**
 * Takes first argument from the arguments
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.lastArg('a', 'b', 'c') // c
 *
 *
 */
const lastArg = nthArg(-1);

export default lastArg;
