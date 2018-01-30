import { tap } from 'ramda';

/**
 * Function with side-effect. Logs input to console and returns that input. Should be used only in development.
 *
 * @func
 * @category Debugging
 *
 * @example
 *
 * 		R_.log('hello') // logs 'hello'
 * 		compose(R_.log, R.sum)([1, 3]) // logs 4
 *
 * @sig a -> a
 *
 */
const log = tap((x) => console.log(x));

export default log;
