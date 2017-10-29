import { unapply, identity } from 'ramda';

/**
 * Converts variadic function to function that accepts list.

 * @sig (a, b, c, ... → d) → ([a, b, c, ...] → d)
 */
export default unapply(identity);
