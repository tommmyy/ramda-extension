import { curry } from 'ramda';

/**
 * Function with side-effect. Logs input to console and returns that input.
 * Similar to "log" but allows to label logged value.
 * @func
 * @category Function
 *
 * @sig a -> b -> b
 *
 * @example
 *
 *		compose(calculation2, trace('Page A'), calculation1); // logs "Page A" and result of calculation1
 *
 */
const trace = curry((x, y) => (console.log(x, y), y));
export default trace;
