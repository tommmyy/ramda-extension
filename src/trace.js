import { curry } from 'ramda';

/**
 * Function with side-effect. Logs input to console and returns that input.
 * Similar to "log" but allowes to label logged value.
 *
 * @category Function
 *
 * @sig a -> b -> b
 *
 * @example
 *
 *		compose(calculation2, trace('Page A'), calculation1); // logs "Page A" and result of calculation1
 *
 */
export default curry((x, y) => (console.log(x, y), y));
