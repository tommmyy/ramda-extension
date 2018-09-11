import { curry, apply, useWith, unapply } from 'ramda';

const alwaysApply = curry((fn, args) => () => apply(fn, args));

/**
 * Creates a thunk out of a function. A thunk delays a calculation until
 * its result is needed, providing lazy evaluation of arguments.
 *
 * @func
 * @private
 * @example
 *
 *      R_.thunkify(R.identity)(42)(); //=> 42
 *      R_.thunkify((a, b) => a + b)(25, 17)(); //=> 42
 *
 * @sig ((a, b, ..., j) -> k) -> (a, b, ..., j) -> (() -> k)
 */
const thunkify = useWith(unapply, [alwaysApply]);

// NOTE (23/06/18): `thunkify` was added to Ramda core but it's
// still unreleased. We should remove this module once it becomes available.
// @see https://github.com/ramda/ramda/pull/2551
export default thunkify;
