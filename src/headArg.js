import { nthArg } from 'ramda';

/**
 * Takes first argument from the arguments
 *
 * @func
 * @category Function
 *
 * @example
 *
 * 		R_.headArg('a', 'b', 'c') // a
 *
 *
 */
const headArg = nthArg(0);

export default headArg;
