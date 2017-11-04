import { lensIndex, over } from 'ramda';

/**
 * Returns an over lens to the first index of list.
 *
 * @category List
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R_.overHead(R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
export default over(lensIndex(0));
