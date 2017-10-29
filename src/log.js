import { tap } from 'ramda';

/**
 * Function with side-effect. Logs input to console and returns that input.
 *
 * @category Function
 *
 * @example
 *
 * 		log('hello') // logs 'hello'
 * 		compose(log, R.sum)([1, 3]) // logs 4
 *
 * @sig a -> a
 *
 */
export default tap((x) => console.log(x));
