import { curry } from 'ramda';

/**
 * @sig a -> b -> b
 *
 * @example
 *
 *		compose(calculation2, trace('Page A'), calculation1); // logs "Page A" and result of calculation1
 *
 */
export default curry((x, y) => (console.log(x, y), y));
