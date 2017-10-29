import { reduce, call } from 'ramda';

/**
 * Call function passed as first argument with arguments determined by second parameter in order.
 *
 * @category Function
 *
 * @sig (a → ... → b) → [a, ..., b] → c
 *
 * @example
 *
 * 		const f = (a) => (b) => a + b
 *   	reduceCallable(f, [1, 2]) // 3
 *
 */
export default reduce(call);
