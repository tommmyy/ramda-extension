import R from 'ramda';

/**
 * Testing string if starts with some prefix.
 *
 * @param  {string} prefix
 * @param  {string} x
 * @return {boolean}          True if `x` starts with `prefix`
 * @sig
 */
export default R.useWith(R.equals, [R.identity, R.take(1)]);
