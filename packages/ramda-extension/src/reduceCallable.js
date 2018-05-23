import { reduce, call } from 'ramda';

/**
 * Call function passed as first argument with arguments determined by second parameter in order.
 *
 * @func
 * @category Function
 *
 * @sig (a → ... → b) → [a, ..., b] → c
 *
 * @example
 *
 *        const f = (a) => (b) => a + b
 *
 *        R_.reduceCallable(f, [1, 2]) // 3
 *
 */
const reduceCallable = reduce(call);

export default reduceCallable;
