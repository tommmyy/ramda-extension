import { memoizeWith, identity } from 'ramda';

/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument will not result in an additional
 * call to `fn`; instead, the cached result for that argument will be returned
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        let count = 0;
 *        const factorial = R_.memoizeWithIdentity(n => {
 *          count += 1;
 *          return R.product(R.range(1, n + 1));
 *        });
 *        factorial(5); // 120
 *        factorial(5); // 120
 *        factorial(5); // 120
 *        count; // 1
 *
 */
const memoizeWithIdentity = memoizeWith(identity);

export default memoizeWithIdentity;
