import { reduce, call } from 'ramda';

/**
 *
 * @sig (a → ... → b) → [a, ..., b] → c
 *
 * @example
 *
 * 		const f = (a) => (b) => a + b
 *   	reduceCallable(f, [1, 2]) // 3
 */
export default reduce(call);
