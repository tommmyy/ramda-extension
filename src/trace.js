import { curry } from 'ramda';

/**
 * @sig a -> b -> b
 */
export default curry((x, y) => (console.log(x, y), y));
